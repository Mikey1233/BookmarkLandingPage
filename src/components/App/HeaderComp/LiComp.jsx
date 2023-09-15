
function LiComp({ setBar, name,bar }) {
    // return <li onClick={() => setBar(false)}></li>;
    return (
      <li onClick={()=>bar?setBar(false):setBar(true)}>
        <a href={`#${name}`}>{name}</a>
      </li>
    );
  }
  export default LiComp