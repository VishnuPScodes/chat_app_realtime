
import { useNavigate } from 'react-router-dom';
import styles from './user.module.css';

export const Users=()=>{
    const navigate=useNavigate();
    const data = [
      {
        name: "Vishnu",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        name: "Vishnu",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        name: "Vishnu",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        name: "Vishnu",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        name: "Vishnu",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        name: "Vishnu",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
    ];
    return <div>
       <div className={styles.cont}>
        <div className={styles.user_heading}>Chat with a user</div>
            {data.map((e)=>{
                return (
                  <div
                    className={styles.single_user}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <img
                      className={styles.image_div}
                      src={e.url}
                      height="50px"
                      alt="user_image"
                    />
                    <div className={styles.user_name}>{e.name}</div>
                  </div>
                );
            })}
       </div>
    </div>
}