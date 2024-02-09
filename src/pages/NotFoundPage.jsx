import { Link } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px'
  },
  text: {
    fontSize: '18px',
    marginBottom: '20px'
  },
  link: {
    fontSize: '18px',
    textDecoration: 'none',
    color: 'grey'
  }
};

export default function NotFoundPage (){
return (
     <div style={styles.container}>
      <h1 style={styles.title}>404 - Страница не найдена</h1>
      <p style={styles.text}>Извините, но запрашиваемая вами страница не найдена.</p>
      <Link to={appRoutes.MAIN} style={styles.link}>Вернуться на главную страницу</Link>
    </div>
);
}





