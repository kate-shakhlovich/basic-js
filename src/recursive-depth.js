module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) return 0;
        let depth = 1;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (Array.isArray(element)) {
                const elDepth = this.calculateDepth(element) + 1;
                if (elDepth > depth) {
                    depth = elDepth;
                }
            }    
            
        }
        return depth;
    }
};