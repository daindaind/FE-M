import {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {Calendar} from 'components/calendar/Calendar/Calendar.tsx';
import {CalendarEventList} from 'components/@common/CalendarEventList/CalendarEventList.tsx';
import FloatingButton from 'components/@common/FloatingButton/FloatingButton.tsx';
import MyCalendarBottomSheet from 'components/myCalendarBottomSheet/myCalendarBottomSheet.tsx';

import {getMonthYearDetails, getNewMonthYear} from 'utils';
import {useGetPersonalCalendar} from 'hooks/queries/CalendarHomeScreen/useGetPersonalCalendar.ts';

export default function CalendarHomeScreen() {
  const currentMonthYear = getMonthYearDetails(new Date());
  const [monthYear, setMonthYear] = useState(currentMonthYear);
  const [selectedDate, setSelectedDate] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const {
    data: posts,
    isPending,
    isError,
  } = useGetPersonalCalendar({
    month: monthYear.month,
    year: monthYear.year,
  });

  if (isPending || isError) {
    return <></>;
  }

  const handlePressDate = (date: number) => {
    setSelectedDate(date);
  };

  const handleUpdateMonth = (increment: number) => {
    setMonthYear(prev => getNewMonthYear(prev, increment));
  };

  return (
    <SafeAreaView className={'bg-white flex-1'}>
      <Calendar
        monthYear={monthYear}
        schedules={posts}
        onChangeMonth={handleUpdateMonth}
        selectedDate={selectedDate}
        onPressDate={handlePressDate}
      />
      <CalendarEventList posts={posts[selectedDate]} />
      <FloatingButton type={'add'} onPress={open} />
      <MyCalendarBottomSheet isOpen={isOpen} onOpen={open} onClose={close} />
    </SafeAreaView>
  );
}
