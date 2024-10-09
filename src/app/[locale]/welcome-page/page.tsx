import { NextPage } from 'next';
import WelcomePage from './WelcomePage';

interface Props {
    searchParams: {
        showWelcomeStories: string | undefined;
    };
}

const Page: NextPage<Props> = ({ searchParams: { showWelcomeStories } }) => {
    return <WelcomePage showWelcomeStoriesParam={showWelcomeStories === undefined || showWelcomeStories === 'true'} />;
};

export default Page;
