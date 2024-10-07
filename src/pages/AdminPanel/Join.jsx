// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

// import './Join.css';

// export default function SignIn() {
//   const [name, setName] = useState('');
//   const [room, setRoom] = useState('');

//   return (
//     <div className="joinOuterContainer">
//       <div className="joinInnerContainer">
//         <h1 className="heading">Join</h1>
//         <div>
//           <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
//         </div>
//         <div>
//           <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
//         </div>
//         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
//           <button className={'button mt-20'} type="submit">Sign In</button>
//         </Link>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [selectedContact, setSelectedContact] = useState('');

  // Sample contacts list
  const contacts = ['jane', 'john', 'mary'];

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <select
            className="joinInput mt-20"
            value={selectedContact}
            onChange={(event) => setSelectedContact(event.target.value)}
          >
            <option value="">Select Contact</option>
            {contacts.map((contact) => (
              <option key={contact} value={contact}>
                {contact}
              </option>
            ))}
          </select>
        </div>
        <Link
          onClick={(e) => (!name || !selectedContact) ? e.preventDefault() : null}
          to={`/chat?name=${name}&room=${selectedContact}`}
        >
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
