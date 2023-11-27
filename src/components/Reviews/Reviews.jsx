import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import man from 'images/reviews/man.webp';
import man2 from 'images/reviews/man2.webp';
import w1 from 'images/reviews/w1.webp';
import w2 from 'images/reviews/w2.webp';
import {
  ReviewsBtn,
  ReviewsBtnBox,
  ReviewsList,
  ReviewsListItem,
  ReviewsListItemDiscr,
  ReviewsListItemImg,
  ReviewsListItemName,
} from './Reviews.styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Reviews = () => {
  const { t } = useTranslation();

  const initialReviews = 4;
  const [reviewsNumber, setReviewsNumber] = useState(initialReviews);

  const reviews = [
    {
      img: w1,
      name: 'Jennifer Thompson',
      discr:
        'Being a part of the FinanceElite closed club has truly been a game-changer for me.',
    },
    {
      img: man,
      name: 'Brian Mitchell',
      discr:
        "I now have a significant advantage in the financial markets, and I couldn't be more grateful.",
    },
    {
      img: w2,
      name: 'Alexandra Turner',
      discr:
        "It's the perfect community for those who value quality and confidentiality.",
    },
    {
      img: man2,
      name: 'Ethan Reynolds',
      discr:
        'Thanks for providing a unique perspective on the world of finance and delivering a highly qualified approach!',
    },
    {
      img: w2,
      name: 'Alexandra Turner',
      discr:
        "It's the perfect community for those who value quality and confidentiality.",
    },
    {
      img: man2,
      name: 'Ethan Reynolds',
      discr:
        'Thanks for providing a unique perspective on the world of finance and delivering a highly qualified approach!',
    },
  ];

  const handleReviewsNumber = () => {
    setReviewsNumber(reviewsNumber + 4);
  };

  return (
    <Section>
      <Container>
        <Title>{t('Reviews')}</Title>
        <ReviewsList>
          {reviews.slice(0, reviewsNumber).map((review, idx) => (
            <ReviewsListItem key={idx}>
              <ReviewsListItemImg src={review.img} alt="" />
              <ReviewsListItemName>{review.name}</ReviewsListItemName>
              <ReviewsListItemDiscr>{review.discr}</ReviewsListItemDiscr>
            </ReviewsListItem>
          ))}
        </ReviewsList>
        <ReviewsBtnBox>
          {reviewsNumber < reviews.length && (
            <ReviewsBtn onClick={handleReviewsNumber}>
              <span> {t('VIEW MORE')} </span>
            </ReviewsBtn>
          )}
        </ReviewsBtnBox>
      </Container>
    </Section>
  );
};
