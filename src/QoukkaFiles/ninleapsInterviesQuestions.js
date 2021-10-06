function outer() {
    function inner() {
      console.log('inner result: ', inner);
    }
    inner();
    var inner = 10
  }
  outer()
  
  let list = [1, 6, 18, 22, 25]
  const returnValue =  list.reduce((acc,each)=>{
  if(each>20) return acc+each
  return acc
  },0)
  
  
  const first = {
    a: {
      name: {
        first: "First",
        last: "Last"
      },
      age: 26
    },
    b: "engineer"
  }
  
  const duplicate = {...first};
  
  duplicate.a.age = 24
  duplicate.b = 'manager';
  
  first.a.age // 24
  first.b // engineer
  
  
  
  
  
  
  
  async function getNumber() {
    const response = await // api call -> returns boolean -> true
    if (response) {
      return 10; //
    }
    return 20;
  }
  
  const answer = getNumber();
  
  answer //  Promise
  typeof answer // Object
  
//   number, object, string, boolean, function
  
  
  
  function higherOrder(component) {
    return React.cloneElement(component, {
      ...component.props,
      disabled: true
    })
  }
  
  const EnhancedComponent = higherOrder(<button>Hello</button>);
  
//   component -> component
  
//   Function -> function
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function Component() {
    const [state, setState] = useState({});
    // 1
    useEffect(() => {
      /** code */
    })
  
    // 2
    useEffect(() => {
      /** code */
    }, [])
  
    // 3
    useEffect(() => {
  
      /** code */
    }, [state])
    return <div>Dashmeet</div>
  }
  
  