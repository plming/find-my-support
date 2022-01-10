declare interface ServiceDetailApi {
    page: number,
    perPage: number,
    totalCount: number,
    currentCount: number,
    data: ServiceDetailModel[]
}

declare interface ServiceDetailModel {
    SVC_ID: string,
    지원유형: string,
    서비스명: string,
    서비스목적: string,
    신청기한: string,
    지원대상: string,
    선정기준: string,
    지원내용: string,
    신청방법: string,
    구비서류: string,
    접수기관명: string,
    문의처전화번호: string,
    온라인신청사이트URL: string,
    수정일시: string,
    소관기관명: string,
    행정규칙: string,
    자치법규: string,
    법령: string
}