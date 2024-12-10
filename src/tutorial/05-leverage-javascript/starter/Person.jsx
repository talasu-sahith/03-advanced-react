const Person = ({ id, name, nickName, images }) => {
  console.log(name);
  const img = images && images[0] && images[0].small && images[0].small.url;
  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>Nick name : {nickName || `Shake and Bake`} </p>
        <img src={img} className="img"></img>
      </div>
    </>
  );
};
export default Person;
