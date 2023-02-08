var MyModule = (function MyModule(export){
  let _myPrivateVar = "foo"

  export.method1 = function(){
    return "bar"
  }

  export.method2 = function(){
    return "baz"
  }

  return export;
}(MyModule || {}))