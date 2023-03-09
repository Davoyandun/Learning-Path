# Reactive Programming
## What is Reactive Programming?
Reactive programming is a programming paradigm oriented around data flows and the propagation of change. This means that it should be possible to express static or dynamic data flows with ease in the programming languages used, and that the underlying execution model will propagate changes through the data flow.

the reactive programming is a type of declaravive paradigm focused on data stream and the propagation of change.

---
### what is stream?
A stream is a sequence of ongoing events ordered in time. A stream is able to notify multiple observers about the occurrence of an event.Data is proccesed one by one and not all at the same time.

---
All of the data and events fired during our app's lifecycle can be represented as a stream of data over time; and our programs are reactive when we react to each of these changes.

```
const $increment = document.querySelector('#increment');
let counter = 0;

$increment.addEventListener('click', onIncrement);

function onIncrement(event) {
  counter += 1;
}

```

Not only clicks can be represented as a stream. By running the ```onIncrement``` function multiple times, we are mutating the value of ```counter``` over time, so the value of counter could itself be a stream.


![imagen1](https://miro.medium.com/v2/resize:fit:720/format:webp/1*KBK96fR2xSAmvYw1Y1TRtQ.jpeg)


By combining each of our flows, we have produced another flow called clicks. This stream is a representation of which buttons have been pressed in a window of time. If we associate each clickstream with a function that updates the counter value, our clickstream ultimately represents the counter value over time.

---
###  What is change propagation?

Change propagation is how we notify a part of our program that some of its dependencies has changed (or that some event has occurred) and therefore it must react appropriately.

---

