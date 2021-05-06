console.log('你好段闰平')
//创建树
const createTree=value=>{
    return{
    data:value,
    children:null,
    parent:null,
    };
};
//增加新的节点
const addChild=(node,value)=>{
    const newNode={
        data:value,
        children:null,
        parent:node,
    };
    node.children=node.children||[];
    node.children.push(newNode);
    return newNode;
}
//遍历所有节点,先根遍历
const travel=(tree,fn)=>{
    fn(tree);
    if(!tree.children){
        return;
    }
    for(let i=0;i<tree.children.length;i++){
        travel(tree.children[i],fn);
    }
};
//删除节点
const removeNode=(tree,node)=>{
    const siblings=node.parent.children;
    let index=0;
    for(let i=1;i<siblings.length;i++){
        if(siblings[i]===node){
            index=i;
        }
    }
siblings.splice(index,1);
};


const tree=createTree(10);
const node2=addChild(tree,20);
const node3=addChild(tree,30);
const node4=addChild(tree,40);
//给node2在增加节点
addChild(node2,200);
addChild(node2,201);
console.log(tree);
//打印出节点数据
const fn=node=>{
  console.log(node.data);
}
travel(tree,fn)
//删除节点
removeNode(tree,node4)