<?php
if(isset($_POST['submit'])){
//$aaruush = 'aaruush';
//header('Location: index.html');
       $conn = mysqli_connect('localhost','root','','campusambsdr') or die("Error: ".mysqli_connect_error());
 $name=$_POST['name'];
$regNumber=htmlentities($_POST['regNumber']);
$primaryPhone = htmlentities($_POST['primaryPhone']);
$email = htmlentities($_POST['email']);
$committee1= htmlentities($_POST['committee1']);
$committee2= htmlentities($_POST['committee2']);
$skill= htmlentities($_POST['skill']);
$academics= htmlentities($_POST['academics']);
$leader= htmlentities($_POST['leader']);
$instance= htmlentities($_POST['instance']);
$strengths= htmlentities($_POST['strengths']);
$work= htmlentities($_POST['work']);
$schedule= htmlentities($_POST['schedule']);
$juniors= htmlentities($_POST['juniors']);
$criricism= htmlentities($_POST['criricism']);
$quality= htmlentities($_POST['quality']);
$strike= htmlentities($_POST['strike']);
$unexpected= htmlentities($_POST['unexpected']);
$participants= htmlentities($_POST['participants']);
$pertaining= htmlentities($_POST['pertaining']);
$roundwise= htmlentities($_POST['roundwise']);
$individual= htmlentities($_POST['individual']);
$team_event= htmlentities($_POST['team_event']);
$incorporate= htmlentities($_POST['incorporate']);
 $query = "INSERT INTO `registrations`(`name`, `reg_no`, `phone`, `email`, `committee1`,`committee2`, `que1`, `que2`, `que3`,
 `que4`, `que5`, `que6`, `que7`, `que8`, `que9`, `que10`, `que11`, `que12`, `que13`, `que14`, `que15`, `que16`,
 `que17`, `que18`) VALUES
 ('$name','$regNumber','$primaryPhone','$email','$committee1','$committee2','$skill','$academics','$leader','$instance',
   '$strengths','$work','$schedule','$juniors','$criricism','$quality','$strike','$unexpected',
   '$participants','$pertaining','$roundwise','$individual','$team_event','$incorporate')";



   $result = mysqli_query($conn,$query);



   if($result){
       echo "<script type='text/javascript'>alert('Thank you! . Successfully Submitted!')</script>";
       echo "<script type='text/javascript'>window.location= 'success.html'</script>";
      //header('location:index.html');
   }
   else{
     echo "Try Again";
   }
}
?>
