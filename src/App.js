import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Postitem from './components/Postitem';
import Postlist from './components/Postlist';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';


function App() {

  const [posts, setPosts] = useState([
  ])



  const [post, setPost] = useState({ title: "", body: "" })

  const addNewProduct = (event) => {
    event.preventDefault()
    if (post.title != "" && post.body != "") {
      setPosts([...posts, { ...post, id: Date.now() }])
    } else {
      alert("Внимание! Не все поля заполнены ")
    }
    setPost({ title: "", body: "" })

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>

      <form>
        <MyInput onChange={event => setPost({ ...post, title: event.target.value })} value={post.title} type="text" placeholder="Название товара" />
        <MyInput onChange={event => setPost({ ...post, body: event.target.value })} value={post.body} type="text" placeholder="Цена товара" />
        <MyButton onClick={addNewProduct}>Добавить товар</MyButton>
      </form>


      {posts.length !== 0
        ? <Postlist remove={removePost} posts={posts} title="Список товаров" />
        : <h1>Товаров нет</h1>
      }


    </div>
  );




}

export default App;

