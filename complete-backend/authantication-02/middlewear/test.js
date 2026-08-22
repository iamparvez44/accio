
function test(req, res, next){
  console.log("i am test middle wear");
  next();
}

export default test;