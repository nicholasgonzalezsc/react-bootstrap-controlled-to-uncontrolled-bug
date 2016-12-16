# React Bootstrap Controlled To Uncontrolled Bug
When a value of undefined is passed to an input, the previous value is still shown.
For example, if I view one item with field "name" = "hello" and then open a new item without field "name",
the input will keep showing "hello," even if though the value passed to value was undefined.

To fix this requires having default values throughout the code, through ternary statements, the data model, 
or a wrapper around the input. The problem with this is that then you have to maintain all of these extra default values,
and eventually remove them from items that would otherwise not have the default value fields saved on them.

![reactbootstrapundefined](https://cloud.githubusercontent.com/assets/22032573/21275702/f98c582a-c382-11e6-96a7-aba926ebc451.gif)
