import { getTitle } from '@repo/shared/utils';
import Posts from './posts';

const posts = [
    {
        title: 'Post 1',
        slug: 'post-1',
        summary:
            'This is the summary of post 1, which is a very long summary that goes on and on and on.',
        date: '2023-10-01',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Post 2',
        slug: 'post-2',
        summary:
            'This is the summary of post 2, which is a very long summary that goes on and on and on.',
        date: '2023-10-02',
        tags: ['tag3', 'tag4']
    }
];

export const metadata = {
    title: getTitle('Blog')
};

export default function Blog() {
    return <Posts posts={posts} />;
}
