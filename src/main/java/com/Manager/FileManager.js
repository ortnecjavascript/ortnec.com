function FileManager(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    varFileObject = fso.OpenTextFile("\\tmp\javaScritp.data", 2, true,0);
    varFileObject.write(someData);
    varFileObject.close();
}