import {ProductRequest} from './product-request/product-request';
import {Comment} from './comment/comment';
import {User} from './user/user';

export const productRequestsMock: ProductRequest[] = [
  {
    id: 'ebfcc030-b2b4-4a5a-bbc8-8be83ef187d1',
    title: 'Add tags for solutions',
    category: 'Enhancement',
    upVotes: 112,
    userHasUpVoted: false,
    status: 'Suggestion',
    description: 'Easier to search for solutions based on a specific stack.',
  },
  {
    id: '307b0896-2847-4eae-8b82-e7fcadc3b99e',
    title: 'Add a dark theme option',
    category: 'UX',
    upVotes: 99,
    userHasUpVoted: false,
    status: 'Suggestion',
    description: 'It would help people with light sensitivities and who prefer dark mode.'
  },
  {
    id: '4120719b-2915-4237-be7d-4c586b5437ac',
    title: "Q&A within the challenge hubs",
    category: "Feature",
    upVotes: 65,
    userHasUpVoted: true,
    status: "Suggestion",
    description: "Challenge-specific Q&A would make for easy reference."
  },
  {
    id: '22318889-f2cb-4411-be89-d9f08d867027',
    title: "Add image/video upload to feedback",
    category: "Enhancement",
    upVotes: 51,
    userHasUpVoted: false,
    status: "Suggestion",
    description: "Images and screencasts can enhance comments on solutions."
  },
  {
    id: 'e1eda21a-ebad-4289-a3ec-e2a1af4f242d',
    title: 'Update burger menu icon',
    category: 'UI',
    upVotes: 5,
    userHasUpVoted: false,
    status: 'Suggestion',
    description: 'There was this cool burger icon with only two stripes!'
  },
  {
    id: '14118be0-53d5-4583-92c3-4bb2309abe48',
    title: "Ability to follow others",
    category: "Feature",
    upVotes: 42,
    userHasUpVoted: false,
    status: "Suggestion",
    description: "Stay updated on comments and solutions other people post."
  },
  {
    id: 'e0830a3e-8238-48b8-a747-f2c94c1bb19f',
    title: "Preview images not loading",
    category: "Bug",
    upVotes: 3,
    userHasUpVoted: false,
    status: "Suggestion",
    description: "Challenge preview images are missing when you apply a filter.",
    comments: []
  },
  {
    id: '2d792f6a-9071-4dc7-9e6a-fcad665b444e',
    title: "More comprehensive reports",
    category: "Feature",
    upVotes: 123,
    userHasUpVoted: false,
    status: "Planned",
    description: "It would be great to see a more detailed breakdown of solutions."
  },
  {
    id: 'f5a60748-501e-4cf2-94e0-2ac9918e85aa',
    title: "Learning paths",
    category: "Feature",
    upVotes: 28,
    userHasUpVoted: false,
    status: "Planned",
    description: "Sequenced projects for different goals to help people improve."
  },
  {
    id: '4aa0d6a4-4f4c-4487-b8f4-3d7ace8b9aa9',
    title: "One-click portfolio generation",
    category: "Feature",
    upVotes: 62,
    userHasUpVoted: false,
    status: "In-Progress",
    description: "Add ability to create professional looking portfolio from profile."
  },
  {
    id: '76f8f555-9210-42ad-9c06-005e267b3a3f',
    title: "Bookmark challenges",
    category: "Feature",
    upVotes: 31,
    userHasUpVoted: false,
    status: "In-Progress",
    description: "Be able to bookmark challenges to take later on."
  },
  {
    id: '26d5072d-01ee-4fa3-a6c1-e535689981b3',
    title: "Animated solution screenshots",
    category: "Bug",
    upVotes: 9,
    userHasUpVoted: true,
    status: "In-Progress",
    description: "Screenshots of solutions with animations don’t display correctly.",
    comments: []
  },
  {
    id: '66465f99-059e-4a6c-ab9f-36d73ce93ee3',
    title: "Add micro-interactions",
    category: "Enhancement",
    upVotes: 71,
    userHasUpVoted: false,
    status: "Live",
    description: "Small animations at specific points can add delight."
  }
];

export const commentsMock: Comment[] = [
  {
    id: '1600c007-23ae-460c-8086-440aaa9231e1',
    productRequestId: 'ebfcc030-b2b4-4a5a-bbc8-8be83ef187d1',
    content: 'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
    createdById: 'ba056558-9f76-402d-9195-3b5329f1e1ee'
  },
  {
    id: '7bd2340d-1502-44ea-911b-c5e1e893f1be',
    productRequestId: 'ebfcc030-b2b4-4a5a-bbc8-8be83ef187d1',
    content: 'Please use fun, color-coded labels to easily identify them at a glance',
    createdById: '532d721e-ea1a-4f68-9dbf-02ba5ea8fd5f'
  },
  {
    id: 'b552e12f-a0e6-493a-9e80-db0b1f20eeda',
    productRequestId: '307b0896-2847-4eae-8b82-e7fcadc3b99e',
    content: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
    createdById: '2cdae446-f907-40cf-8238-d02c2e5d0c11'
  },
  {
    id: 'ea2d1ce9-72c8-47ca-a4ce-c1b001e0097e',
    productRequestId: '307b0896-2847-4eae-8b82-e7fcadc3b99e',
    content: 'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
    createdById: 'e8cacec7-2e13-4e71-9a37-f54f5e570cd6',
    replyIds: ['f3a1b022-fdc1-48a6-85dc-03eda858e866']
  },
  {
    id: 'f3a1b022-fdc1-48a6-85dc-03eda858e866',
    productRequestId: '307b0896-2847-4eae-8b82-e7fcadc3b99e',
    content: 'While waiting for dark mode, there are browser extensions that will also do the job. Search for \'dark theme\' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
    replyToCommentId: 'ea2d1ce9-72c8-47ca-a4ce-c1b001e0097e',
    createdById: 'a43b8b1a-33bd-4a76-bfc8-a993cd9d7a00',
    replyIds: ['478255ff-cbb2-4cfc-9fa8-88692187a47c']
  },
  {
    id: '478255ff-cbb2-4cfc-9fa8-88692187a47c',
    productRequestId: '307b0896-2847-4eae-8b82-e7fcadc3b99e',
    content: 'Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I\'d prefer not to use one of such extensions, however, for security and privacy reasons.',
    replyToCommentId: 'f3a1b022-fdc1-48a6-85dc-03eda858e866',
    createdById: 'b6833497-8ec8-4e34-8b4a-81791bcb1b12'
  },
  {
    id: '4ed223b5-69c0-4810-9546-9d05929decc8',
    productRequestId: '4120719b-2915-4237-be7d-4c586b5437ac',
    content: "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
    createdById: '9eb792c1-ed76-41c5-a93b-e1a4919fd0da'
  },
  {
    id: '2b8605d5-2099-4253-9f54-24000f19b9d5',
    productRequestId: '22318889-f2cb-4411-be89-d9f08d867027',
    content: "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
    createdById: 'aa070218-ba03-447c-8e57-b13db150949e'
  },
  {
    id: '009b4c0c-168d-4061-8067-f4119c58f021',
    productRequestId: '22318889-f2cb-4411-be89-d9f08d867027',
    content: "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
    createdById: '65cbbc03-f5b8-4c0b-9ba8-1e0668193e23'
  },
  {
    id: '429dee07-d18b-4d33-b7c9-155b553e77ab',
    productRequestId: '14118be0-53d5-4583-92c3-4bb2309abe4',
    content: "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
    createdById: 'd062b7bf-86ad-47f1-ba84-d92051a2c125'
  },
  {
    id: '50f7cbcd-9273-4c55-9bd1-52dac02f6abb',
    productRequestId: '14118be0-53d5-4583-92c3-4bb2309abe4',
    content: "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
    replyToCommentId: '429dee07-d18b-4d33-b7c9-155b553e77ab',
    createdById: '094daa19-9b47-42fe-bf2f-95eda881b269'
  },
  {
    id: '9c2e6585-ea8c-476d-8fbb-e50beaaf85d1',
    productRequestId: '14118be0-53d5-4583-92c3-4bb2309abe4',
    content: "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
    createdById: 'b25f6231-e20a-4c3c-903c-a72e503ae0dd'
  },
  {
    id: '52d0a7c3-079b-4dc1-a33e-314587081e20',
    productRequestId: '2d792f6a-9071-4dc7-9e6a-fcad665b444e',
    content: "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
    createdById: 'd062b7bf-86ad-47f1-ba84-d92051a2c125'
  },
  {
    id: 'afd15ff6-8af2-4682-906f-5bc5b74d5812',
    productRequestId: '2d792f6a-9071-4dc7-9e6a-fcad665b444e',
    content: "Yeah, this would be really good. I'd love to see deeper insights into my code!",
    createdById: 'b25f6231-e20a-4c3c-903c-a72e503ae0dd'
  },
  {
    id: 'd2952069-5c75-4826-9050-6ca7a2ca8c93',
    productRequestId: 'f5a60748-501e-4cf2-94e0-2ac9918e85aa',
    content: "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
    createdById: '9eb792c1-ed76-41c5-a93b-e1a4919fd0da'
  },
  {
    id: 'f110971b-8960-4d18-a9e8-5007cf28ef42',
    productRequestId: '4aa0d6a4-4f4c-4487-b8f4-3d7ace8b9aa9',
    content: "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
    createdById: 'b6833497-8ec8-4e34-8b4a-81791bcb1b12'
  },
  {
    id: '99f2106c-ce1a-4dd5-973b-332f9df0dfc9',
    productRequestId: '76f8f555-9210-42ad-9c06-005e267b3a3f',
    content: "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
    createdById: 'ba056558-9f76-402d-9195-3b5329f1e1ee'
  },
  {
    id: '9266a424-4e0f-4a58-b733-8071d66f4187',
    productRequestId: '66465f99-059e-4a6c-ab9f-36d73ce93ee3',
    content: "I'd love to see this! It always makes me so happy to see little details like these on websites.",
    createdById: 'd062b7bf-86ad-47f1-ba84-d92051a2c125'
  },
  {
    id: 'afe5b231-7ce0-49a2-b6c0-c97ca9816e46',
    productRequestId: '66465f99-059e-4a6c-ab9f-36d73ce93ee3',
    content: "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
    replyToCommentId: '9266a424-4e0f-4a58-b733-8071d66f4187',
    createdById: 'ba056558-9f76-402d-9195-3b5329f1e1ee'
  }
];

export const usersMock: User[] = [
  {
    id: 'ba056558-9f76-402d-9195-3b5329f1e1ee',
    image: 'assets/user-images/image-suzanne.jpg',
    name: 'Suzanne Chang',
    username: 'upbeat1811'
  },
  {
    id: '532d721e-ea1a-4f68-9dbf-02ba5ea8fd5f',
    image: "assets/user-images/image-thomas.jpg",
    name: "Thomas Hood",
    username: "brawnybrave"
  },
  {
    id: '2cdae446-f907-40cf-8238-d02c2e5d0c11',
    image: "assets/user-images/image-elijah.jpg",
    name: "Elijah Moss",
    username: "hexagon.bestagon"
  },
  {
    id: 'e8cacec7-2e13-4e71-9a37-f54f5e570cd6',
    image: "assets/user-images/image-james.jpg",
    name: "James Skinner",
    username: "hummingbird1"
  },
  {
    id: 'a43b8b1a-33bd-4a76-bfc8-a993cd9d7a00',
    image: "assets/user-images/image-anne.jpg",
    name: "Anne Valentine",
    username: "annev1990"
  },
  {
    id: 'b6833497-8ec8-4e34-8b4a-81791bcb1b12',
    image: "assets/user-images/image-ryan.jpg",
    name: "Ryan Welles",
    username: "voyager.344"
  },
  {
    id: '9eb792c1-ed76-41c5-a93b-e1a4919fd0da',
    image: "assets/user-images/image-george.jpg",
    name: "George Partridge",
    username: "soccerviewer8"
  },
  {
    id: 'aa070218-ba03-447c-8e57-b13db150949e',
    image: "assets/user-images/image-javier.jpg",
    name: "Javier Pollard",
    username: "warlikeduke"
  },
  {
    id: '65cbbc03-f5b8-4c0b-9ba8-1e0668193e23',
    image: "assets/user-images/image-roxanne.jpg",
    name: "Roxanne Travis",
    username: "peppersprime32"
  },
  {
    id: 'd062b7bf-86ad-47f1-ba84-d92051a2c125',
    image: "assets/user-images/image-victoria.jpg",
    name: "Victoria Mejia",
    username: "arlen_the_marlin"
  },
  {
    id: '094daa19-9b47-42fe-bf2f-95eda881b269',
    image: "assets/user-images/image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround"
  },
  {
    id: 'b25f6231-e20a-4c3c-903c-a72e503ae0dd',
    image: "assets/user-images/image-jackson.jpg",
    name: "Jackson Barker",
    username: "countryspirit"
  }
];

export const currentUserMock = {
  id: '094daa19-9b47-42fe-bf2f-95eda881b269',
  image: 'assets/user-images/image-zena.jpg',
  name: 'Zena Kelley',
  username: 'velvetround'
}
