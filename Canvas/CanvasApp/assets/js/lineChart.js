/**
 * Created by williamjiang on 2015/10/6.
 */
var randomScalingFactor = function(){ return Math.round(Math.random()*100)};  // ���������
var lineChartData = {
    labels : ["January","February","March","April","May","June","July"],  // �����������
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(220,220,220,0.2)", // �����ɫ
            strokeColor : "rgba(220,220,220,1)", // ������ɫ
            pointColor : "rgba(220,220,220,1)", // ����ɫ
            pointStrokeColor : "#fff", // ��������ɫ
            pointHighlightFill : "#fff", // ��߹����
            pointHighlightStroke : "rgba(220,220,220,1)", // �������߹���ɫ
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]  // ������������
        },
        {
            label: "My Second dataset",
            fillColor : "rgba(151,187,205,0.2)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");  // ��ȡ�����Ķ���
    window.myLine = new Chart(ctx).Line(lineChartData, { // ����chart���󣬸�ֵ
        responsive: true
    });
}
