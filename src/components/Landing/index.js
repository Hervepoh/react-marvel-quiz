import React , {useEffect,useRef,useState,Fragment} from 'react'

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

  const displayBtn = btn && (<><div className="leftBox">
                                  <button className="btn btn-welcome">Inscription</button>
                                </div>
                                <div className="rightBox">
                                  <button className="btn btn-welcome">Inscription</button>
                                </div>
                              </>);

  return (
    <main className="welcomePage" ref={ refWolverine }>
    { displayBtn }
    </main>
  )
}

export default Landing