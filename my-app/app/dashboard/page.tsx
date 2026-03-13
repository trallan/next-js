
async function getPosts(){
    const res = await fetch("https://psychic-space-adventure-p94pj9wppx7h6wpw-1337.app.github.dev/api/posts", {
        next: { revalidate: 60 }
    });

    return res.json();
}

type Post = {
  id: number;
  attributes: {
    title: string;
    content: string;
  };
};

export default async function Dashboard(){
    const posts = await getPosts();

    return (
        <div>
            <div>
            <h1>Blog</h1>

            {posts.data.map((post: Post) => (
                <div key={post.id}>
                    <h2>{post.attributes.title}</h2>
                    <p>{post.attributes.content}</p>
                </div>
            ))}
            </div>
        </div>
    );
}