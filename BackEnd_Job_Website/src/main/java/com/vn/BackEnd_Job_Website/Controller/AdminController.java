package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Dto.ResponseReportDTO;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final HiringRepository hiringRepository;
    private final CompanyRepository companyRepository;
    private final CandidateRepository candidateRepository;

    @GetMapping("/report")
    public ResponseEntity<?> report(){
        return new ResponseEntity<>(ResponseReportDTO.builder()
                .jobs(hiringRepository.count())
                .jobsOpen(hiringRepository.countJobsOpen())
                .jobsClose(hiringRepository.countJobsClose())
                .company(companyRepository.count())
                .candidate(candidateRepository.count())
                .build(),HttpStatus.OK);
    }
}