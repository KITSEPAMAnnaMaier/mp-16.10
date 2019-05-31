const GET_POSTS = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  title: string;
  body: string;
}

interface PostModel extends Post {
  userId: number;
  id: number;
}

export { GET_POSTS, Post, PostModel };
