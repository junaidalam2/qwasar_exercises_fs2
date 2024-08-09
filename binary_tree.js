
param_1 = [1,1,1,1,1,null,1]
param_1 = [2,2,2,5,2]


// function univalued_binary_tree(param_1) {


//     for(let i = 1; i < param_1.length; i++) {

//         if( param_1[i - 1] === null || param_1[i] === null) continue;
//         if(param_1[i - 1] !== param_1[i]) return false;

//     }

//     return true;

// };

// console.log(univalued_binary_tree(param_1))

param_1 = [2,2,2,5,2]
param_1 = [1,1,1,1,1,null,1]


function univalued_binary_tree(param_1) {

    let object = {}

    param_1.forEach(element => {

        
        if(element == !null) {
            if(object[element] === undefined) {
                object[element] = 0;
            }
    
            object[element]++
        }
        
        
    });
    //console.log(object)
    
    return Object.keys(object).length === 1 ? true : false;
}

console.log(univalued_binary_tree(param_1))


/*
TreeNode {
  val: 1,
  right: TreeNode {
    val: 1,
    right: TreeNode { val: 1, right: null, left: null },
    left: TreeNode { val: null, right: null, left: null }
  },
  left: TreeNode {
    val: 1,
    right: TreeNode { val: 1, right: null, left: null },
    left: TreeNode { val: 1, right: null, left: null }
  }
}
*/


/*
function TreeNode(val, left, right ) {
    this.val = val == undefined ? 0 : val;
    this.left = left == undefined ? null : left;
    this.right = right == undefined ? null : right;

}


function univalued_binary_tree(root) { 
    if(!root) return true;
    return helper(root, root.val);
}


function helper(node, val) {
    if(!node) return true; // reached end of branch
    if (node.val !== val) return false;
    return helper(node.left, val) && helper(node.right, val);

}

console.log(univalued_binary_tree(param_1))
*/