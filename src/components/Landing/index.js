import React , {useEffect,useRef,useState,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { route } from '../../Env';

const Landing = () => {

  const [btn, setbtn] = useState(false);

  const refWolverine = useRef(null);
    
  useEffect(() => {
      refWolverine.current.classList.add('startingImg');
      setTimeout(() =>{
        refWolverine.current.classList.remove('startingImg');
        setbtn(true);
      },1000);
    }, [])

  const setleftImg = () => {
    refWolverine.current.classList.add('leftImg');
  } 

  const setrightImg = () => {
    refWolverine.current.classList.add('rightImg');
  } 

  const resetImg = (imgClass) => {
    if(refWolverine.current.classList.contains(imgClass)){
      refWolverine.current.classList.remove(imgClass);
    }
   
  } 

  const displayBtn = btn && (<Fragment><div className="leftBox" onMouseOut={ () => resetImg('leftImg') } onMouseOver={ setleftImg }>
                                  <Link to={route.signup} className="btn btn-welcome">Inscription</Link>
                                </div>
                                <div className="rightBox"  onMouseOut={ () => resetImg('rightImg') } onMouseOver={ setrightImg }>
                                  <Link to={route.login}  className="btn btn-welcome">Connexion</Link>
                                </div>
                              </Fragment>);

  return (
    <main className="welcomePage" ref={ refWolverine }>
    { displayBtn }
    </main>
  )

}

export default Landing