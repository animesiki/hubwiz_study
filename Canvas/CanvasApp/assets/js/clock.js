/**
 * Created by williamjiang on 2015/10/6.
 */
$(function(){
    init();
})

function init(){
    clock();
    setInterval(clock,1000); //ÿһ�������»���һ��
}

function clock(){
    var now = new Date();

    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0,0,150,150); // ��ո��������ڵ�ָ������
    ctx.translate(75,75);  // �������û���������Դ��
    ctx.scale(0.4,0.4);  // ���ŵ�ǰ��ͼ��������С��
    ctx.rotate(-Math.PI/2); // ����
    ctx.strokeStyle = "black"; // Ҫ���Ƶ���������ɫ
    ctx.fillStyle = "white"; // �����ɫ
    ctx.lineWidth = 8; // �߶εĿ��
    ctx.lineCap = "round"; //Բ����ͷ

    // ����Сʱ�̶�
    ctx.save();
    for (var i=0;i<12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
    }
    ctx.restore();

    // ���Ʒ��ӿ̶�
    ctx.save();
    ctx.lineWidth = 5;
    for (i=0;i<60;i++){
        if (i%5!=0) {
            ctx.beginPath();
            ctx.moveTo(117,0);
            ctx.lineTo(120,0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI/30);
    }
    ctx.restore();

    //��ȡ��ǰʱ��ĺ��롢�롢���ӡ�Сʱ��ֵ
    var ms = now.getMilliseconds( );
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr>=12 ? hr-12 : hr;

    ctx.fillStyle = "black";

    // ����ʱ��
    ctx.save();
    ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(80,0);
    ctx.stroke();
    ctx.restore();

    // ���Ʒ���
    ctx.save();
    ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28,0);
    ctx.lineTo(112,0);
    ctx.stroke();
    ctx.restore();

    // ��������
    ctx.save();
    ctx.rotate((sec+ms/1000) * Math.PI/30);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30,0);
    ctx.lineTo(83,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95,0,10,0,Math.PI*2,true);
    ctx.stroke();
    ctx.fillStyle = "#555";
    ctx.arc(0,0,3,0,Math.PI*2,true);
    ctx.fill();
    ctx.restore();

    // ����ʱ��Բ�����
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0,0,142,0,Math.PI*2,true);
    ctx.stroke();

    ctx.restore();
}
