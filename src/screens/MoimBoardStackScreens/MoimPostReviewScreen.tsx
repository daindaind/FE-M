import {useState} from 'react';
import StarRating from 'react-native-star-rating-widget';

import {ScreenContainer} from 'components/ScreenContainer.tsx';
import {Typography} from 'components/@common/Typography/Typography.tsx';
import {CustomButton} from 'components/@common/CustomButton/CustomButton.tsx';
import {InputField} from 'components/@common/InputField/InputField.tsx';

import {queryClient} from 'containers/TanstackQueryContainer.tsx';
import {
  MoimPostStackNavigationProp,
  MoimPostStackRouteProp,
} from 'navigators/types';
import usePostReviewMutation from '../../hooks/queries/MoimPostReviewScreen/usePostReviewMutation.ts';

export default function MoimPostReviewScreen({
  route,
  navigation,
}: {
  route: MoimPostStackRouteProp;
  navigation: MoimPostStackNavigationProp;
}) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const {mutate} = usePostReviewMutation();
  const targetUserId = route.params.id as number;

  console.log(targetUserId);

  return (
    <ScreenContainer
      fixedBottomComponent={
        <CustomButton
          label="후기 작성하기"
          textStyle="text-lg text-white font-bold"
          onPress={() => {
            mutate(
              {targetUserId, rating, content: review},
              {
                onSuccess: data => {
                  console.log(data);
                  queryClient.invalidateQueries({queryKey: ['review']});
                  navigation.goBack();
                },
                onError: error => {
                  console.log(error);
                },
              },
            );
          }}
        />
      }>
      <Typography fontWeight={'BOLD'} className="text-lg mt-4">
        모임 활동 평가를 해주세요!
      </Typography>

      <StarRating
        rating={rating}
        onChange={setRating}
        starSize={30}
        color="gold"
        starStyle={{marginHorizontal: 5}}
        maxStars={5}
      />

      <InputField
        touched
        className="h-[200px] mt-4"
        multiline
        textAlignVertical="top"
        placeholder="해당 유저가 모임에서 어떻게 활동했는지, 작성해주세요!"
        value={review}
        onChangeText={text => setReview(text)}
      />
    </ScreenContainer>
  );
}