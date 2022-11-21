import {
  FirstTutorial,
  SecondTutorial,
  ThirdTutorial,
} from "../assets/svg/tutorial";

const data = [
  {
    subHeader: "Browse the Feed",
    body: "Swipe through the feed to see what activities other students want to do. You can on click that post to see more info and view their profile.",
    img: <FirstTutorial />,
  },
  {
    subHeader: "Post an Activity",
    body: "Don’t see something you’re interested in? You can post an activity you want to do to the feed. You can only post once a day!",
    img: <SecondTutorial />,
  },
  {
    subHeader: "Connect and Coordinate",
    body: "Once you’ve found an activity to do, you can coordinate a time and place with that person to get started!",
    img: <ThirdTutorial />,
  },
];

export default data;
