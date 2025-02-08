function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP" || (wantsTrainer && wantsDietPlan)) {
        return "VIP Plan: Rs.800/month (Gym + Trainer + Diet Plan)";
    } else if (planType === "Premium" || wantsTrainer) {
        return "Premium Plan: Rs.500/month (Gym + Personal Trainer)";
    } else {
        return "Basic Plan: Rs.200/month (Gym Access Only)";
    }
}
// console.log(choosePlan("Basic", false, false)); 
// console.log(choosePlan("Premium", true, false)); 
// console.log(choosePlan("VIP", true, true)); 
console.log(choosePlan("Basic", true, true)); 
console.log(choosePlan("Basic", false, true)); 