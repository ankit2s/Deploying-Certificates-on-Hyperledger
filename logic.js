/**
 * Here Training Institute issues certificates
 * @param {org.example.mynetwork.issueTrainCertificate} issueCert parameter contains the seafarer object and a training certificate
 * @transaction
 */
async function issueTrainCertificate(issueCert)
{
  	let factory = getFactory();
    let participantRegistry =await getParticipantRegistry('org.example.mynetwork.Seafarer');
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.TrainingCertificate');

  	console.log("Asset Registry:");
  	console.log(assetRegistry);
    let certificate=await assetRegistry.get(issueCert.trainingCert.certificateId);
    certificate.seafarer=issueCert.seafarer;
    assetRegistry.update(certificate);
}

/**
 * Here Medical Institute issues certificates
 * @param {org.example.mynetwork.issueMedicCertificate} issueCert parameter contains the seafarer object and a medical certificate
 * @transaction
 */
async function issueMedicCertificate(issueCert)
{
  	let factory = getFactory();
    let participantRegistry =await getParticipantRegistry('org.example.mynetwork.Seafarer');
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.MedicalCertificate');

  	console.log("Asset Registry:");
  	console.log(assetRegistry);
    let certificate=await assetRegistry.get(issueCert.medicalCert.certificateId);
    certificate.seafarer=issueCert.seafarer;
    assetRegistry.update(certificate);
}

/**
 * Here General certificates are issued
 * @param {org.example.mynetwork.issueSeafarerCertificate} issueCert parameter contains the seafarer object and a seafarer certificate
 * @transaction
 */
async function issueGeneralCertificate(issueCert)
{
  	let factory = getFactory();
    let participantRegistry =await getParticipantRegistry('org.example.mynetwork.Seafarer');
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.SeafarerCertificate');

  	console.log("Asset Registry:");
  	console.log(assetRegistry);
    let certificate=await assetRegistry.get(issueCert.seafarerCert.certificateId);
    certificate.seafarer=issueCert.seafarer;
    assetRegistry.update(certificate);
}

/**
 * Here Flag certificates are issued
 * @param {org.example.mynetwork.issueFlagCertificate} issueCert parameter contains the seafarer object and a flag certificate
 * @transaction
 */
async function issueFlagCertificate(issueCert)
{
  	let factory = getFactory();
    let participantRegistry =await getParticipantRegistry('org.example.mynetwork.Seafarer');
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.FlagCertificate');

  	console.log("Asset Registry:");
  	console.log(assetRegistry);
    let certificate=await assetRegistry.get(issueCert.flagCert.certificateId);
    certificate.seafarer=issueCert.seafarer;
    assetRegistry.update(certificate);
}

/**
 * Here Vessel certificates are issued
 * @param {org.example.mynetwork.issueVesselCertificate} issueCert parameter contains the vessel object and a vessel certificate
 * @transaction
 */
async function issueVesselCertificate(issueCert)
{
  	let factory = getFactory();
    let participantRegistry =await getParticipantRegistry('org.example.mynetwork.Vessel');
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.VesselCertificate');

  	console.log("Asset Registry:");
  	console.log(assetRegistry);
    let certificate=await assetRegistry.get(issueCert.vesselCert.certificateId);
    certificate.vessel=issueCert.vessel;
    assetRegistry.update(certificate);
}

/**
 * Here it shows all the certificates of a seafarer
 * @param {org.example.mynetwork.viewAllCertificatesSeafarer} transaction takes the seafarer object and for that id returns all the certificates.
 * @transaction
 */
async function viewAllCertificatesSeafarer(transaction)
{
   	console.log(transaction.seafarer.seafarerId);
  	let assetRegistry=await getAssetRegistry('org.example.mynetwork.TrainingCertificate');
  	let resu=await assetRegistry.getAll();
    let array=[];
  	console.log(resu);
    resu.forEach(function(element)
      {
       // let str =element.seafarer.seafarerId;
        console.log(element);
        console.log(element.seafarer);
        var sea=element.seafarer;
        console.log("This is Seafarer ");
        console.log(sea);
       	var str=sea.$identifier;
        console.log(typeof(str));
        if(str==transaction.seafarer.seafarerId)
        {
          console.log("Added");
          array.push(element);
        }
      });
  	let assetRegistry1=await getAssetRegistry('org.example.mynetwork.MedicalCertificate');
  	let resu1=await assetRegistry1.getAll();
  	resu1.forEach(function(element)
      {
        var sea=element.seafarer;
       	var str=sea.$identifier;
        if(str==transaction.seafarer.seafarerId)
        {
          console.log("Added");
          array.push(element);
        }
      });
    let assetRegistry2=await getAssetRegistry('org.example.mynetwork.FlagCertificate');
  	let resu2=await assetRegistry2.getAll();
  	resu2.forEach(function(element)
      {
        var sea=element.seafarer;
       	var str=sea.$identifier;
        if(str==transaction.seafarer.seafarerId)
        {
          console.log("Added");
          array.push(element);
        }
      });
	let assetRegistry3=await getAssetRegistry('org.example.mynetwork.SeafarerCertificate');
  	let resu3=await assetRegistry3.getAll();
  	resu3.forEach(function(element)
      {
        var sea=element.seafarer;
       	var str=sea.$identifier;
        if(str==transaction.seafarer.seafarerId)
        {
          console.log("Added");
          array.push(element);
        }
      });
	  console.log(array);
  return array;
}

/**
 * Here it shows all the certificates of a Vessel
 * @param {org.example.mynetwork.viewAllCertificatesVessel} transaction1 takes the vessel object and for that id return all the certificates related to that vessel.
 * @transaction
 */
async function viewAllCertificatesVessel(transaction1)
{
  	let array=[];
    let assetRegistry1=await getAssetRegistry('org.example.mynetwork.VesselCertificate');
  	let resu1=await assetRegistry1.getAll();
  	resu1.forEach(function(element)
      {
        var sea=element.vessel;
       	var str=sea.$identifier;
        if(str==transaction1.vessel.officialNumber)
        {
          console.log("Added");
          array.push(element);
        }
      });
    return array;
}

/**
 * Ship Certification Authority verifies the certificate
 * @param {org.example.mynetwork.verifyFlagCertificate} verification takes the certificate as a object as well takes the status and updates the status
 * @transaction
 */
async function verifyFlagCertificate(verification)
{
  	let factory = getFactory();
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.FlagCertificate');
    let certificate=await assetRegistry.get(verification.certificate.certificateId);
  	console.log(certificate);
  	certificate.certificateStatus=verification.certificateStatus;
    assetRegistry.update(certificate);
}

/**
 * Ship Certification Authority verifies the certificate
 * @param {org.example.mynetwork.verifyTrainingCertificate} verification takes the certificate as a object as well takes the status and updates the status
 * @transaction
 */
async function verifyTrainingCertificate(verification)
{
  	let factory = getFactory();
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.TrainingCertificate');
    let certificate=await assetRegistry.get(verification.certificate.certificateId);
  	console.log(certificate);
  	certificate.certificateStatus=verification.certificateStatus;
    assetRegistry.update(certificate);
}

/**
 * Ship Certification Authority verifies the certificate
 * @param {org.example.mynetwork.verifySeafarerCertificate} verification takes the certificate as a object as well takes the status and updates the status
 * @transaction
 */
async function verifySeafarerCertificate(verification)
{
  	let factory = getFactory();
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.SeafarerCertificate');
    let certificate=await assetRegistry.get(verification.certificate.certificateId);
  	console.log(certificate);
  	certificate.certificateStatus=verification.certificateStatus;
    assetRegistry.update(certificate);
}

/**
 * Ship Certification Authority verifies the certificate
 * @param {org.example.mynetwork.verifyMedicalCertificate} verification takes the certificate as a object as well takes the status and updates the status
 * @transaction
 */
async function verifyMedicalCertificate(verification)
{
  	let factory = getFactory();
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.MedicalCertificate');
    let certificate=await assetRegistry.get(verification.certificate.certificateId);
  	console.log(certificate);
  	certificate.certificateStatus=verification.certificateStatus;
    assetRegistry.update(certificate);
}

/**
 * Ship Certification Authority verifies the certificate
 * @param {org.example.mynetwork.verifyVesselCertificate} verification takes the certificate as a object as well takes the status and updates the status
 * @transaction
 */
async function verifyVesselCertificate(verification)
{
  	let factory = getFactory();
    let assetRegistry=await getAssetRegistry('org.example.mynetwork.VesselCertificate');
    let certificate=await assetRegistry.get(verification.certificate.certificateId);
  	console.log(certificate);
  	certificate.certificateStatus=verification.certificateStatus;
    assetRegistry.update(certificate);
}

/**
 * This shows the current status of certificate of seafarer.
 * @param {org.example.mynetwork.certificateStatusSeafarer} status takes the seafarer id/object and return the status of certificate for all the certificate
 * @transaction
 */
 async function certificateStatusSeafarer(status)
{
  	console.log('hell');
  	var array=[];
    console.log('hell2');

  	let assetRegistry=await getAssetRegistry('org.example.mynetwork.TrainingCertificate');
  	let resu=await assetRegistry.getAll();
  	console.log(resu);
    resu.forEach(function(element)
      {
       // let str =element.seafarer.seafarerId;
        console.log(element);
        console.log(element.seafarer);
        var sea=element.seafarer;
        console.log("This is Seafarer ");
        console.log(sea);
       	var str=sea.$identifier;
        console.log(typeof(str));
        if(str==status.seafarer.seafarerId)
        {
          	var item=new Object();
            item.CertificateId=element.certificateId;
            item.CertificateStatus=element.certificateStatus;
            array.push(item);
        }
      });
  	let assetRegistry1=await getAssetRegistry('org.example.mynetwork.MedicalCertificate');
  	let resu1=await assetRegistry1.getAll();
  	resu1.forEach(function(element)
      {
        var sea=element.seafarer;
       	var str=sea.$identifier;
        if(str==status.seafarer.seafarerId)
        {
          var item=new Object();
            item.CertificateId=element.certificateId;
            item.CertificateStatus=element.certificateStatus;
            array.push(item);
        }
      });
    let assetRegistry2=await getAssetRegistry('org.example.mynetwork.FlagCertificate');
  	let resu2=await assetRegistry2.getAll();
  	resu2.forEach(function(element)
      {
        var sea=element.seafarer;
       	var str=sea.$identifier;
        if(str==status.seafarer.seafarerId)
        {
          var item=new Object();
            item.CertificateId=element.certificateId;
            item.CertificateStatus=element.certificateStatus;
            array.push(item);
        }
      });
	let assetRegistry3=await getAssetRegistry('org.example.mynetwork.SeafarerCertificate');
  	let resu3=await assetRegistry3.getAll();
  	resu3.forEach(function(element)
      {
        var sea=element.seafarer;
       	var str=sea.$identifier;
        if(str==status.seafarer.seafarerId)
        {
         var item=new Object();
            item.CertificateId=element.certificateId;
            item.CertificateStatus=element.certificateStatus;
            array.push(item);
        }
      });
	  console.log(array);
  	var myJson=JSON.stringify(array); 	
    return myJson;        
}


/**
 * This shows the current status of certificate of vessel.
 * @param {org.example.mynetwork.certificateStatusVessel} status takes the vessel id/object and return the status of certificate for all the certificate
 * @transaction
 */
async function certificateStatusVessel(status)
{
  
  	let array=[];
    let assetRegistry1=await getAssetRegistry('org.example.mynetwork.VesselCertificate');
  	let resu1=await assetRegistry1.getAll();
  	resu1.forEach(function(element)
      {
        var sea=element.vessel;
       	var str=sea.$identifier;
        if(str==status.vessel.officialNumber)
        {
           var item=new Object();
            item.CertificateId=element.certificateId;
            item.CertificateStatus=element.certificateStatus;
            array.push(item);
        }
      });
    var myJson=JSON.stringify(array); 	
    return myJson;         
}

/**
 * This transaction searches for seafarers according to their rank and experience.
 * @param {org.example.mynetwork.searchSeaFarerByParams} param takes the parameter according to which it has to search
 * @transaction
 */
async function searchSeaFarerByParams(param)
{
    let participantRegistry = await getParticipantRegistry('org.example.mynetwork.Seafarer');
  	let resu=await participantRegistry.getAll();
  	//console.log(resu[0].rank);
  	let array =[];
   	resu.forEach(function(element)
    {
      if(element.rank==param.rank)
      array.push(element);
    });
  	console.log(array);
    return array;
}
