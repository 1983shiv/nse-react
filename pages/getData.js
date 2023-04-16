const getData = async() => {
    const response = await fetch('http://127.0.0.1:5000/api/data')
    const oc = await response.json()
    // console.log("oc", oc)
    return {
        oc
    }
  }


export default getData  