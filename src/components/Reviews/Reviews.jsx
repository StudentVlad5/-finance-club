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
  ReviewsList,
  ReviewsListItem,
  ReviewsListItemDiscr,
  ReviewsListItemName,
} from './Reviews.styled';

export const Reviews = () => {
  const reviews = [
    {
      img: w1,
      name: 'Jennifer Thompson',
      discr:
        "Being a part of the FinanceElite closed club has truly been a game-changer for me. The insights and strategies shared within the community are invaluable. It's more than just a club; it's a network of professionals navigating the financial landscape successfully.",
    },
    {
      img: man,
      name: 'Brian Mitchell',
      discr:
        "FinanceElite has exceeded my expectations. Joining the closed club has given me access to unique analytics and expert knowledge. I now have a significant advantage in the financial markets, and I couldn't be more grateful.",
    },
    {
      img: w2,
      name: 'Alexandra Turner',
      discr:
        "Unveiling the secrets of the financial world with FinanceElite! The exceptional recommendations and behind-the-scenes insights from industry professionals make this club outstanding. It's the perfect community for those who value quality and confidentiality.",
    },
    {
      img: man2,
      name: 'Ethan Reynolds',
      discr:
        "FinanceElite is more than a club; it's a community where you can learn, discuss, and make successful investments. Thanks for providing a unique perspective on the world of finance and delivering a highly qualified approach!",
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Reviews</Title>
        <ReviewsList>
          {reviews.map((review, idx) => (
            <ReviewsListItem key={idx}>
              <img width="70" height="70" src={review.img} alt="" />
              <ReviewsListItemName>{review.name}</ReviewsListItemName>
              <ReviewsListItemDiscr>{review.discr}</ReviewsListItemDiscr>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      </Container>
    </Section>
  );
};
