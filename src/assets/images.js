
const samples = [
    require('./sample-1.jpg'),
    require('./sample-2.jpeg'),
    require('./sample-3.jpg'),
];

export default {
    samples,
    rsample() {
        let idx = Math.round(Math.random()*samples.length)%samples.length;
        return samples[idx];
    },
}