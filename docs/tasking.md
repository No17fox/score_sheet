# 学生成绩单 tasking

该程序可以分解为以下几个task：

1. 打印主菜单

   ```
   #1 printMainMenu
   输入：
   	exitFlag: Boolean
   输出：
   	mainMenu: String
   ```

2. 提示添加学生信息时的输入格式

   ```
   #2 buildStuInforPromptStr
   输入：
   	inputType: String
   	prompt: String
   输出：
   	stuInforPromptStr: String
   ```

3. 验证输入的学生信息的格式

   ```
   #3 verifyStudentInfor
   输入：
   	stuInforStr: String
   输出：
   	stuInforArr: [String]
   ```

4. 添加学生信息

   ```
   #4 addStudentInfor
   输入：
   	stuInforArr: [String]
   输出：
   	studentInfor: Object
   	addResult: String
   ```

5. 提示打印成绩单时的输入格式

   ```
   #5 buildStuSeqPromptStr
   输入：
   	inputType: String
   	prompt: String
   输出：
   	stuSeqPromptStr: String
   ```

6. 验证输入的学生序列信息

   ```
   #6 verifySutdentSeq
   输入：
   	studentSeqStr: String
   输出：
   	studentSeqArr: [String]
   ```

7. 创建成绩单

   ```
   #7 buildScoreSheet
   输入：
   	studentSeqArr: [String]
   	studentInfor: Object
   输出：
   	scoreRepot：Object
   ```

8. 打印成绩单

   ```
   #8 printScoreSheet
   输入：
   	scoreRepot：Object
   输出：
   	scoreSheet: String
   ```

9. 退出系统

   ```
   #9 exitSystem
   输入：
   	selectionId: Number
   输出：
   	exitFlag: Boolean
   	exitInfor: String
   ```
