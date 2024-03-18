const Summa = () => {
  const fname="Bala";
  return (
    <div>
        <p>first</p>
        <ChildA fname={fname}/>
    </div>
  )
};

function ChildA({fname}) {
  return (
    <div>
        <p>childA</p>
        <ChildB fname={fname}/>
    </div>
  )
};

function ChildB({fname}) {
    return (
      <div>
          <p>childB</p>
            <h2>{fname}</h2>
      </div>
    )


      }


export default Summa;