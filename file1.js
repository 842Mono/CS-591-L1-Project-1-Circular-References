let fs = require('fs');
let babel = require("@babel/core");

let debug = false;

fs.readFile("inputcode.js", (err, code) =>
{
    if(err)
        console.log(err);

    let ExtractMembers = (ptr, list) =>
    {
            while(ptr)
            {
                if(ptr.property)
                {
                    list.push(ptr.property.name);
                    ptr = ptr.object;
                }
                else
                {
                    list.push(ptr.name);
                    ptr = undefined;
                }
    
            }
    }
    
    babel.transform(code, { plugins: [
    {
        visitor: {
            AssignmentExpression(path)
            {
    //             console.log(path.node.left);
    //             console.log(path.node.right);
                
                let listleft = [];
                let listright = [];
    
                ExtractMembers(path.node.left, listleft);
                ExtractMembers(path.node.right, listright);
                
                listleft = listleft.reverse();
                listright = listright.reverse();
                
                if(debug)
                {
                    console.log(listleft);
                    console.log(listright);
                }
                
                while(listleft.length > 0 || listright > 0)
                {
                    if(listleft[0] == listright[0])
                    {
                        listleft.shift()
                        listright.shift()
                    }
                    else
                        break;
                }
                
                if(listleft.length != 0 && listright.length == 0) // || !(listleft[0] == listright[0]))
                    console.log("Warning! Circular Reference Assignment at " + path.node.loc.start.line);
    //             console.log(path.node);
            }
        }
    }]});
    

});