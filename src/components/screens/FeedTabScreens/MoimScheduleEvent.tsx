import {FlatList} from 'react-native';

import {Typography} from '../../@common/Typography/Typography.tsx';
import {schedules} from 'screens/FeedTabScreens/FeedHomeScreen.tsx';
import ScheduleCard from '../../home/SchduleCard/ScheduleCard.tsx';

export default function MoimScheduleEvent() {
  return (
    <>
      <Typography className="text-2xl mt-5" fontWeight={'BOLD'}>
        반가워요 00님
      </Typography>
      <Typography className="text-gray-400" fontWeight={'LIGHT'}>
        오늘 3개의 예정된 일정이 있어요
      </Typography>
      <FlatList
        data={schedules}
        horizontal={true}
        renderItem={({item}) => (
          <ScheduleCard
            schedule={item.schedule}
            date={item.date}
            spaceName={item.spaceName}
            time={item.time}
          />
        )}
        keyExtractor={schedule => String(schedule.id)}
        contentContainerStyle={{
          gap: 10,
        }}
      />
    </>
  );
}