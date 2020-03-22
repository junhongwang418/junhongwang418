# Digit Recognizer

![digit recognizer](https://miro.medium.com/max/480/1*Ft2rLuO82eItlvJn5HOi9A.png)

This is my personal project I did as the end of machine 
learning diary series. It's just a toy project to show you the 
performance differences among different machine learning algorithms
on MNIST dataset. MNIST is a dataset of images of labeled digits.
For simplicity, I only implemented decision tree, knn, perceptron, 
and logistic regression. Here's the demo of this project.

<div>
<canvas id="canvas" width=140 height=140></canvas>
<p>True Label: <span id="true_label"></span></p>
<p>Decision Tree Prediction (accuracy 87.21%): <span id="decision_tree_pred"></span></p>
<p>K Nearest Neighbors Prediction: Takes too long to predict</p>
<p>Perceptron (accuracy 89.23%): <span id="perceptron_pred"></span></p>
<p>Logistic Regression (accuracy 92%): <span id="logistic_pred"></span></p>
</div>

<script src="https://raw.githubusercontent.com/ioneone/DigitRecognizer/master/dr.js" type="text/javascript"></script>
