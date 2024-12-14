module.exports=function(app){
    
    require('./admission')(app);
    require('./attendance')(app);
    require('./branch')(app);
    require('./course')(app);
    require('./staff')(app);
    require('./student')(app);
    require('./subject')(app);
    require('./topic')(app);
    require('./exams')(app);
    require('./staff_attendance')(app);
    require('./student_attendance')(app);
    require('./student_course')(app);
    require('./student_exam')(app);

}