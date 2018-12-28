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

3. 解析输入的学生信息

   ```
   #3 parseInput
   输入：
   	stuInforStr: String
   输出：
   	stuInforArr: [String]
   ```

4. 验证输入的学生信息的格式

   ```
   #4 verifyStudentInfor
   输入：
   	stuInforArr: [String]
   输出：
   	verifiedStuInfor: [String]
   	illegalInputPrompt: String
   ```

5. 创建学生信息

   ```
   #5 createStuInforObj
   输入：
   	verifiedStuInfor: [String]
   输出：
   	studentInfor: Object
   ```

6. 创建学生信息数据库

   ```
   #6 buildStudentDatabase
   输入：
   	studentInfor: Object
   输出：
   	studentDatabase: [Object]
   	addResult: String
   ```

7. 提示打印成绩单时的输入格式

   ```
   #5 buildStuSeqPromptStr
   输入：
   	inputType: String
   	prompt: String
   输出：
   	stuSeqPromptStr: String
   ```

8. 验证输入的学生序列信息

   ```
   #6 verifySutdentSeq
   输入：
   	studentSeqStr: String
   输出：
   	studentSeqArr: [String]
   ```

9. 创建成绩单

   ```
   #7 buildScoreSheet
   输入：
   	studentSeqArr: [String]
   	studentInfor: Object
   输出：
   	scoreRepot：Object
   ```

10. 打印成绩单

   ```
   #8 printScoreSheet
   输入：
   	scoreRepot：Object
   输出：
   	scoreSheet: String
   ```

11. 退出系统

    ```
    #9 exitSystem
    输入：
    	selectionId: Number
    输出：
    	exitFlag: Boolean
    	exitInfor: String
    ```
