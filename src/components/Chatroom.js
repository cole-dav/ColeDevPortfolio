// import React, { useRef, useState } from 'react'
// import { Modal, Frame } from '@react95/core'
// // import styled from 'styled-components'

// // import firebase from 'firebase/compat/app';
// // import 'firebase/compat/firestore';
// // import 'firebase/compat/auth';
// // import 'firebase/compat/messaging';
// // import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//     apiKey: "AIzaSyCjDluMnRDIfnFmeT4_yNMwu3hI10T7P1Y",
//     authDomain: "jpalpha-95721.firebaseapp.com",
//     projectId: "jpalpha-95721",
//     storageBucket: "jpalpha-95721.appspot.com",
//     messagingSenderId: "160783600290",
//     appId: "1:160783600290:web:fce86ab12cb7a354ed25fb",
//     measurementId: "G-J4J8LEJX3W"
// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// // const analytics = firebase.analytics();



// // const Wrapper = styled.div`
// //     position: absolute;
// //     top: 20%;
// //     left: 10%;
// // `


// function Chatroom({ items, closeChatroom,openNotepad, isMobile }) {
//     const [user] = useAuthState(auth);

//     return (
//         <Modal
//             icon="gcdef_100"
//             title="Chatroom"
//             closeModal={closeChatroom}
//             style={{
//                 left: isMobile ? '5%' : '15%',
//                 top: isMobile ? '3%' : '15%',
//                 width: isMobile ? '95%' : 400,
//             }}
//             menu={[
//                 { name: 'File', list: [] },
//                 { name: 'Edit', list: [] },
//                 { name: 'Help', list: [] },
//             ]}>
//             <Frame
//                 bg="white"
//                 boxShadow="in"
//                 height="100%"
//             >
 
//                 <div className="App">
                

//                 <section>
//                     {user ? <ChatRoom /> : <SignIn />}
//                 </section>

//                 </div>

//             </Frame>
//         </Modal>
//     )
// }


// function SignIn() {

//     const signInWithGoogle = () => {
//       const provider = new firebase.auth.GoogleAuthProvider();

//     //   auth.signInWithPopup(provider);
//       auth.signInWithPopup(provider).then(function(result) {
//         // code which runs on success
//       }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         console.log(errorCode);
//         alert(errorCode);
      
//         var errorMessage = error.message;
//         console.log(errorMessage);
//         alert(errorMessage);
//       });

//     }
  
//     return (
//       <>
//         <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//         <p>Do not violate the community guidelines or you will be banned for life!</p>
//       </>
//     )
  
// }

// function ChatRoom() {
//     const dummy = useRef();
//     const messagesRef = firestore.collection('messages');
//     const query = messagesRef.orderBy('createdAt').limit(25);
  
//     const [messages] = useCollectionData(query, { idField: 'id' });
  
//     const [formValue, setFormValue] = useState('');
  
  
//     const sendMessage = async (e) => {
//       e.preventDefault();
  
//       const { uid, photoURL } = auth.currentUser;
  
//       await messagesRef.add({
//         text: formValue,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         uid,
//         photoURL
//       })
  
//       setFormValue('');
//       dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }
  
//     return (<>
//       <main>
  
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
//         <span ref={dummy}></span>
  
//       </main>
  
//       <form onSubmit={sendMessage}>
  
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type message" />
  
//         <button type="submit" disabled={!formValue}>post</button>
  
//       </form>
//     </>)
// }
  
  
// function ChatMessage(props) {
//     const { text, uid, photoURL } = props.message;
  
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
//     return (<>
//       <div className={`message ${messageClass}`}>
//         <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=""/>
//         <p>{text}</p>
//       </div>
//     </>)
// }
  

// export default Chatroom
