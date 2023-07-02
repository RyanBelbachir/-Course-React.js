
function Hello({jsonObject}) {
  return (
    <div className="Hello">
      <h1>HELLO NEW IN REACT</h1>
      <div className="image-container">
        {jsonObject.map((item) => (
            /*<li key={item.id}>{item.name} {item.type}</li>*/
            <img src={item.img}></img>
          ))}
      </div>
    </div>
  );
}

export default Hello;
