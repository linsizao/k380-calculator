
/**计算没有括号的表达式的值(操作符限定为'+'、'-'、'*'、'/') */
function calcExpressionWithoutQuote(expression) {
  if ((expression.indexOf('(') > -1) || (expression.indexOf(')') > -1)) {
    return calcExpression(expression);
  }
  var operators = [];
  var nums = [];
  var lastOperatorIndex = -1;
  for (var i = 0; i < expression.length; i++) {
    var charAtIndex = expression.charAt(i);
    if (isOperatorChar(charAtIndex)) {
      operators[operators.length] = charAtIndex;
      nums[nums.length] = expression.substring(lastOperatorIndex + 1, i);
      lastOperatorIndex = i;
    }
    if (i == (expression.length - 1) && lastOperatorIndex < i) {
      nums[nums.length] = expression.substring(lastOperatorIndex + 1, expression.length);
    }
  }
  if (operators.length <= 0 || nums.length <= 0) {
    return expression;
  }
  while (operators.indexOf('*') > -1 || operators.indexOf('/') > -1) {
    operators.forEach(function (value, index) {
      if (value == '*' || value == '/') {
        // 拿到操作符位置。
        var tempResult = calcExpressionWithSingleOperator(nums[index], nums[index + 1], value);
        operators.splice(index, 1);
        nums.splice(index, 2, [tempResult]);
      }
    });
  }
  var calcResult = nums[0] * 1;
  // 现在只剩下'+'、'-'了
  if (operators.indexOf('+') > -1 || operators.indexOf('-') > -1) {
    for (var index = 0; index < operators.length; index++) {
      var value = operators[index];
      if (value == '+' || value == '-') {
        calcResult = calcExpressionWithSingleOperator(calcResult, nums[index + 1], value);
      }
    }
    return calcResult;
  } else {
    return (nums[0] * 1);
  }
}

/**
* 计算只有一个操作符的表达式的值(操作符限定为'+'、'-'、'*'、'/')
*/
function calcExpressionWithSingleOperator(num1, num2, operator) {
  if (operator == '+') return num1 * 1 + num2 * 1;
  if (operator == '-') return num1 * 1 - num2 * 1;
  if (operator == '*') return num1 * num2;
  if (operator == '/') return num1 / num2;
  return NaN;
}

/** 计算算术表达式的值 */
function calcExpression(expression) {
  expression = expression.replace(/\s/g, '').replace(/÷/g, '/').replace(/x/g, '*').replace(/×/g, '*').replace(/X/g, '*');
  if (getCharCountInString(expression, '(') != getCharCountInString(expression, ')'))
    return NaN;
  while (expression && (expression.indexOf('(') > -1) && (expression.indexOf(')') > -1)) {
    var firstRightQuoteIndex = expression.indexOf(')');
    var leftQuoteIndex = expression.indexOf('(');
    for (var i = leftQuoteIndex; i < firstRightQuoteIndex; i++) {
      if (expression.charAt(i) == '(') {
        leftQuoteIndex = i;
      }
    }
    var tempExpression = expression.substring(leftQuoteIndex + 1, firstRightQuoteIndex);
    var tempValue = calcExpressionWithoutQuote(tempExpression);
    expression = expression.substring(0, leftQuoteIndex) + tempValue + expression.substring(firstRightQuoteIndex + 1, expression.length);
  }
  return calcExpressionWithoutQuote(expression);
}

/**获取字符串中某子字符串出现次数 */
function getCharCountInString(strings, chars) {
  return (strings.split(chars)).length - 1;
}

/**判断字符是否是运算符 */
function isOperatorChar(aimChar) {
  return '+-*/'.indexOf(aimChar) > -1;
}

module.exports = { computed: calcExpression }
