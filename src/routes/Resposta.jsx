import { useState, useEffect } from "react";
import axios from "axios";
import './Resposta.css'


const Resposta = () => {



const [posts, setPost] = useState([])

const getPosts = async() => {

    try {

        const response = await axios.get("http://127.0.0.1:5001/idiomas")
        
        const data = response.data


        setPost(data)


    } catch (error) {
        console.log(error)
        
    }

};


useEffect(() => {

getPosts()
}, []);

return (
 <div> 
    <h1 className="post1" > idioma é </h1> 
    {posts.length === 0 ? <p></p> : (
        posts.map((post) => (
            <div className="post" key={post.id}> 
             <h2>{post.idioma }</h2>
            </div>
        ))
    )}
</div>





// <div> 
// <h1 className="post1" > idioma é </h1> 
// {posts.length === 0 ? <p>carregando....</p> : (
//     posts.map((post) => (
//         <div className="post" key={post.id}> 
//          <h2>{post.idioma }</h2>
//         </div>
//     ))
// )}
// </div>









);

}


export default Resposta;