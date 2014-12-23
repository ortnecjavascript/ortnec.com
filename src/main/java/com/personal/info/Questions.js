var errorCode = 'Not correct element ID';
var questionNumber = 0;
function newQuestion(id) {
    var obj;
    switch (id) {
        case 'submit':
            switch (questionNumber++) {
                case 0:
                    obj = MetaData.FIRST_EVENT;
                    break;
                case 1:
                    obj = MetaData.SALARY;
                    showElement('amount');
                    break;
                case 2:
                    obj = MetaData.SOC_PACKAGE;
                    hideElement('amount');
                    showElement('text');
                    setValue('exampleInputAmount');
                    break;
                case 3:
                    obj = MetaData.LAST;
                    hideElement('text');
                    setValue('text');
                    break;
            }
            break;
        case 'cancel':
            obj = MetaData.LAST;
            var sb = new StringBuilder();
            sb.append("Candidate");
            sb.append(CandidateName.getName());
            sb.append(" Amount= ");
            sb.append(Response.getAmount());
            sb.append(" Bonuses= ");
            sb.append(Response.getBonuses());

            FileManager(sb.toString());
            break;
        default :
            console.log(errorCode);
    }
    doChanges('submit', obj.buttonConfirm);
    doChanges('cancel', obj.buttonReject);
    doChanges('title', obj.title);
    doChanges('label', obj.quest);
}