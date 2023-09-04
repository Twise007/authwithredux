import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";


function App() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 hero">
      <Counter/>
      <PostsList/>
      <AddPostForm/>
    </main>
  );
}

export default App;
