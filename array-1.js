let names = ['favour', 'victor', 'marvelous', 'akare', 'desmond', 'chiamaka', 'nkem'];
// isEmpty
// isFull
// push
// pop
// indexOf

const OurArray = {
    length: 0,
    last: -1,
    data: [],
    isEmpty: function() {return this.length === 0},
    // isFull: function() {return (this.last + 1) === this.length},
    push: function(item) {
        // if (this.isFull()) return;
        this.data[this.last + 1] = item;
        this.last++;
        this.length++;
    },
    pop: function() {
        if (this.isEmpty()) return;

        const value = this.data[this.last];
        this.data[this.last] = null;
        this.last--;
        this.length--;

        return value;
    },
    indexOf: function(item) {
        if (this.isEmpty()) return -1;

        let index = -1;

        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                index = i;
                break;
            }
        }

        return index;
    }
}
let nums = Object.create(OurArray);

nums.push(2);
nums.push(4);
nums.push('jerry')

console.log(nums.data);
console.log(nums.pop());
console.log(nums.indexOf(2));
console.log(nums.indexOf(10));
console.log(nums.length);