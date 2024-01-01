function* inorderTraversal(array) {
    function* traverse(node) {
        if (Array.isArray(node)) {
            for (let subarray of node) {
                yield* traverse(subarray);
            }
        } else {
            yield node;
        }
    }

    yield* traverse(array);
}