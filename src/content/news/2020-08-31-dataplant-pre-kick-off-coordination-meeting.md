---
date: 2020-08-31
title: DataPLANT pre kick-off coordination meeting
preview-text: The (co-)applicant group of DataPLANT (speakers of the consortium) met in Annweiler/Trifels from Thursday to Saturday (27th till 29th August) to discuss the kick-off  of the governance and to prepare the various boardmeetings which will be held in the coming weeks. The senior menagement board will have it's inaugural meeting the 3rd September, followed by the scientific and technical board meetings. These meetings are part of the NFDI and DataPLANT community governance. The coordination ...
---

The (co-)applicant group of DataPLANT (speakers of the consortium) met in Annweiler/Trifels from Thursday to Saturday (27th till 29th August) to discuss the kick-off  of the governance and to prepare the various boardmeetings which will be held in the coming weeks. The senior menagement board will have it's inaugural meeting the 3rd September, followed by the scientific and technical board meetings. These meetings are part of the NFDI and DataPLANT community governance. The coordination meeting discussed the final grant and the implications from the budget cuts announced earlier. These will influence the scope and width of workpackages. Futher topics were the rules of compensation within the consortium and the hiring of personnel for each task area starting from now. Open posts will get announced through the [central NFDI platform](https://www.nfdi.de/jobs) as well as at the upcoming GAIN event.

The second half of the meeting was dedicated to shape the vision of DataPLANT and elaborate on a first set of templates and services to start with. The Annotated Research Context (ARC) is at the core DataPLANT and alltask areas are grouped around it.A preliminary core workflow got sketched: The data is acquired from someinstrument and then getting annotated with the help of a first versionof the [Swate tool](https://github.com/nfdi4plants/Swate) publicly available. It allows to pick parameters from known ontologiesand helps to find appropriate parameters (see [best practices](https://github.com/nfdi4plants/AnnotationPrinciples)). If those are missing, they could be added andautomatically being recorded for extension. The standardization processwill pick those up and discuss them with the appropriate committee. Inthe first iteration the user works locally in the proposed ARC filestructure which could either be created through a template ZIP or viathe Excel tool. To allow a versioning in that iterative process a GIT isproposed and a versioning service will be offered by the infrastructureproviders. The data will be later on stored in an object storage.Certain metadata will be copied to the elastic search component asattributes for the bucket used. The ISATAB is getting stored alongsidethe data as well (assay branch within the ARC). It the experiment gotfinalized a further workflow step will be offered to replicate thespecified ARC (composition of data, metadata and workflow description)into the data (publication) repository. This could be a communityrepository (EBI, NCBI, ENA) or another service provided throughDataPLANT. After the assay branch is available within the ARCcomputational workflow e.g. through Galaxy can follow (which requires anappropriate account provided through DataPLANT Hub). The DataPLANT Hubwill allow for simple and complex search on the community data madeavailable through it. The data stewards will be enabled to help with thetemplating of experiments. 