mainWindow.webContents.on("did-finish-load", () => {
  mainWindow.webContents.executeJavaScript(
    Buffer.from(
      "KCgpPT57InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGUoe2VsZW1lbnROYW1lOmUsYXBwZW5kVG86dCxodG1sUHJvcHM6bn0pe2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtmb3IoY29uc3RbZSx0XW9mIE9iamVjdC5lbnRyaWVzKG4pKW9bZV09dDtyZXR1cm4gdC5hcHBlbmRDaGlsZChvKSxvfWZ1bmN0aW9uIHQoZSl7cmV0dXJuYPCfm5EgT2ggbm8sIHRoZXJlJ3MgYmVlbiBhbiBlcnJvci4gSWYgeW91IHNlZSB0aGlzLCBqb2luIHRoZSBzdXBwb3J0IHNlcnZlciwgYW5kIHJlcG9ydCB0aGUgZXJyb3IuIFtbJHtlfV1dYH1mdW5jdGlvbiBuKHt0ZXh0OnQsdGltZW91dDpuLGNvbnRhaW5zSFRNTDpvPSExfSl7Y29uc3Qgcj1lKHtlbGVtZW50TmFtZToiZGl2IixhcHBlbmRUbzpkb2N1bWVudC5ib2R5LGh0bWxQcm9wczp7Y2xhc3NOYW1lOiJUUkFOU1BBUkVOQ1lfX0FMRVJUIixbbz8iaW5uZXJIVE1MIjoidGV4dENvbnRlbnQiXTp0fX0pO3JldHVybiBuZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoKCgpPT57ci5jbGFzc0xpc3QuYWRkKCJUUkFOU1BBUkVOQ1lfX0FMRVJULS1JTkFDVElWRSIpLHNldFRpbWVvdXQoKCgpPT57ci5yZW1vdmUoKSxlKCEwKX0pLDFlMyl9KSxuKX0pKX1jb25zdCBvPVt7bmFtZToiQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGltYWdlIixleGVjdXRlKHtwYXJlbnRCb3g6dCxwcm9wczp7bWFpblN0eWxlc2hlZXQ6bn19KXtjb25zdCBvPWUoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86dCxodG1sUHJvcHM6e2NsYXNzTmFtZToiVFJBTlNQQVJFTkNZX19BQ1RJT04tSU5QVVQiLHBsYWNlaG9sZGVyOiJQYXN0ZSBpbWFnZSBsaW5rIGhlcmUiLG9ua2V5ZG93bjplPT5mdW5jdGlvbih7ZXZlbnQ6ZSxiYWNrZ3JvdW5kQ2hhbmdlcklucHV0OnQsbWFpblN0eWxlc2hlZXQ6bn0pe2NvbnN0IG89dC52YWx1ZTsiRW50ZXIiPT09ZS5jb2RlJiYiIiE9PW8udHJpbSgpJiYobi5pbm5lckhUTUwrPWAjYXBwLW1vdW50e2JhY2tncm91bmQ6IHVybCgke299KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7fWAsd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCJiZ0ltZyIsbykpfSh7ZXZlbnQ6ZSxiYWNrZ3JvdW5kQ2hhbmdlcklucHV0Om8sbWFpblN0eWxlc2hlZXQ6bn0pfX0pO2Uoe2VsZW1lbnROYW1lOiJwIixhcHBlbmRUbzp0LGh0bWxQcm9wczp7aWQ6IlRSQU5TUEFSRU5DWV9fQUNUSU9OLVdBUk5JTkciLHRleHRDb250ZW50OiLwn5uRIFRoZSBpbWFnZSB5b3Ugd2FudCBhcyB5b3VyIGJhY2tncm91bmQgbXVzdCBiZSBzZW50IGFzIGEgbWVzc2FnZSBvbiBEaXNjb3JkLiBZb3Ugd2lsbCBoYXZlIHRvIGNsaWNrIG9uIHRoZSBpbWFnZSwgcHJlc3Mgb24gPE9wZW4gb3JpZ2luYWw+LCBhbmQgY29weSB0aGUgbGluayBmcm9tIHRoZXJlLiJ9fSl9fSx7bmFtZToiQ2hhbmdlIHRoZSBicmlnaHRuZXNzIGxldmVsIixleGVjdXRlKHtwYXJlbnRCb3g6dCxwcm9wczp7aXNEYXJrVGhlbWU6byxicmlnaHRuZXNzTGV2ZWw6cixvdmVybGF5RGFya2VuZXJFbGVtZW50OmEsb3ZlcmxheUJhckVsZW1lbnQ6aX19KXtjb25zdCBzPW8/IjAsMCwwIjoiMjU1LDI1NSwyNTUiLGw9ZSh7ZWxlbWVudE5hbWU6ImgzIixhcHBlbmRUbzp0LGh0bWxQcm9wczp7aWQ6IlRSQU5TUEFSRU5DWV9fQUNUSU9OLUJSSUdIVE5FU1MtTEVWRUwiLHRleHRDb250ZW50OmBMZXZlbDogJHtyLnZhbHVlfWB9fSksYz1lKHtlbGVtZW50TmFtZToiaW5wdXQiLGFwcGVuZFRvOnQsaHRtbFByb3BzOntjbGFzc05hbWU6IlRSQU5TUEFSRU5DWV9fQUNUSU9OLUlOUFVUIix0eXBlOiJyYW5nZSIsbWluOiIwIixtYXg6IjkiLHZhbHVlOmAke3IudmFsdWV9YCxvbmlucHV0OigpPT5mdW5jdGlvbih7YnJpZ2h0bmVzc0xldmVsOmUsb3ZlcmxheUNvbG9yOnQsYnJpZ2h0bmVzc0luZGljYXRvcjpuLGJyaWdodG5lc3NMZXZlbFNsaWRlcjpvLG92ZXJsYXlCYXJFbGVtZW50OnIsb3ZlcmxheURhcmtlbmVyRWxlbWVudDphfSl7YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YHJnYmEoJHt0fSwgLiR7by52YWx1ZX0pYCxudWxsIT09ciYmKHIuc3R5bGUuYmFja2dyb3VuZENvbG9yPWByZ2JhKCR7dH0sIC4ke28udmFsdWV9KWApLGUudmFsdWU9cGFyc2VJbnQoby52YWx1ZSksbi50ZXh0Q29udGVudD1gTGV2ZWw6ICR7ZS52YWx1ZX1gfSh7YnJpZ2h0bmVzc0xldmVsOnIsb3ZlcmxheUNvbG9yOnMsYnJpZ2h0bmVzc0luZGljYXRvcjpsLGJyaWdodG5lc3NMZXZlbFNsaWRlcjpjLG92ZXJsYXlCYXJFbGVtZW50Omksb3ZlcmxheURhcmtlbmVyRWxlbWVudDphfSl9fSk7ZSh7ZWxlbWVudE5hbWU6ImJ1dHRvbiIsYXBwZW5kVG86dCxodG1sUHJvcHM6e2lkOiJUUkFOU1BBUkVOQ1lfX0FDVElPTi1TQVZFLUJSSUdIVE5FU1MiLHRleHRDb250ZW50OiJTYXZlIGJyaWdodG5lc3MgbGV2ZWwiLG9uY2xpY2s6KCk9PmZ1bmN0aW9uKGUpe3dpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiYnJnaHRucyIsYCR7ZS52YWx1ZX1gKSxuKHt0ZXh0OmBCcmlnaHRuZXNzIGxldmVsIHVwZGF0ZWQhIE5vdyBpdCBpcyBhdCBsZXZlbCA8Yj4ke2UudmFsdWV9PC9iPi5gLGNvbnRhaW5zSFRNTDohMCx0aW1lb3V0OjNlM30pfShyKX19KX19XTtmdW5jdGlvbiByKHthY3Rpb246ZSxhY3Rpb25Ub2dnbGVyOnQsYWN0aW9uUHJvcHM6bn0pe3QuY2xhc3NMaXN0LmFkZCgiVFJBTlNQQVJFTkNZX19BQ1RJT04tLUFDVElWRSIpLHQudGV4dENvbnRlbnQ9IiIsZS5leGVjdXRlKHtwYXJlbnRCb3g6dCxwcm9wczpufSksdC5vbmNsaWNrPW51bGx9Y29uc3QgYT0idHlwZVdpbmRvd3MtMi1nM1VZLndpdGhGcmFtZS0yZEw0NWkudGl0bGVCYXItMWl0M2JRLmhvcml6b250YWxSZXZlcnNlLTJRc3N2TC5mbGV4LTNCa0dRRC5kaXJlY3Rpb25Sb3dSZXZlcnNlLUhaYXRueC5qdXN0aWZ5U3RhcnQtMk13bmlxLmFsaWduU3RyZXRjaC1Vd293enIiO2Z1bmN0aW9uIGkoZSl7Y29uc3Qgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO3JldHVybiBudWxsPT09bj8oYWxlcnQodChgJHtlfSBpcyBub3QgaW4gdGhlIERPTS5gKSksbnVsbCk6bn0hZnVuY3Rpb24oKXshZnVuY3Rpb24oKXtjb25zdCBuPWUoe2VsZW1lbnROYW1lOiJpZnJhbWUiLGFwcGVuZFRvOmRvY3VtZW50LmJvZHksaHRtbFByb3BzOnt9fSk7bi5zdHlsZS5kaXNwbGF5PSJub25lIixuLmNvbnRlbnRXaW5kb3c/d2luZG93LmxvY2FsU3RvcmFnZT1uLmNvbnRlbnRXaW5kb3cubG9jYWxTdG9yYWdlOmFsZXJ0KHQoIkNvdWxkIG5vdCBjcmVhdGUgbG9jYWxTdG9yYWdlIG9iamVjdCBiZWNhdXNlIGlmcmFtZSdzIGNvbnRlbnRXaW5kb3cgaXNuJ3QgZGVmaW5lZC4iKSl9KCk7Y29uc3Qgcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthfWApLGw9aSgiLmFwcC0zeGQ2ZDAiKSxjPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoInRoZW1lLWRhcmsiKTtsZXQgZDtpZihudWxsIT09cylkPSFjJiZzLmNsYXNzTGlzdC5jb250YWlucygidGhlbWUtZGFyayIpO2Vsc2V7Y29uc3QgZT1pKCIuYmctMVFJQXVzIik7bnVsbCE9PWUmJihkPSFjJiZlLmNsYXNzTGlzdC5jb250YWlucygidGhlbWUtZGFyayIpKX1jb25zdCBwPXt2YWx1ZTpwYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oImJyZ2h0bnMiKXx8IjkiKXx8OX0sbT1mdW5jdGlvbih7aXNEYXJrVGhlbWU6ZSxicmlnaHRuZXNzTGV2ZWw6dCxiYWNrZ3JvdW5kSW1hZ2VVUkw6bn0pe2NvbnN0IG89ZT9gcmdiYSgwLCAwLCAwLCAwLiR7dC52YWx1ZX0pYHx8InJnYmEoMCwwLDAsMC45KSI6YHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4ke3QudmFsdWV9KWB8fCJyZ2JhKDI1NSwyNTUsMjU1LDAuNykiO3JldHVybmAudGhlbWUtZGFyaywgLnRoZW1lLWxpZ2h0IHstLWJhY2tncm91bmQtcHJpbWFyeTp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtc2Vjb25kYXJ5OnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC10ZXJ0aWFyeTp0cmFuc3BhcmVudDstLWNoYW5uZWx0ZXh0YXJlYS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tZGVwcmVjYXRlZC1wYW5lbC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1zZWNvbmRhcnktYWx0OnRyYW5zcGFyZW50Oy0tc2Nyb2xsYmFyLWF1dG8tdHJhY2s6dHJhbnNwYXJlbnQ7fS50aGVtZS1kYXJrIHstLXNjcm9sbGJhci1hdXRvLXRodW1iOnJnYmEoMjU1LDI1NSwyNTUsMC4zKTt9LnRoZW1lLWxpZ2h0IHstLXNjcm9sbGJhci1hdXRvLXRodW1iOnJnYmEoMCwwLDAsMC42KTt9I2FwcC1tb3VudCB7YmFja2dyb3VuZDp1cmwoJHtufSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyO30uJHthfXttYXJnaW4tdG9wOjA7cGFkZGluZy10b3A6NHB4O2JhY2tncm91bmQ6JHtvfTt9LmFwcC0zeGQ2ZDB7YmFja2dyb3VuZC1jb2xvcjogJHtvfTt9LmNvbnRhaW5lci0yY2Q4TXosIC5hcHBsaWNhdGlvblN0b3JlLTJuazdMbywgLmJhY2tncm91bmQtZmtLclh0IHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fS5wb3BvdXQtVGRoSjZaLCAuY29udGFpbmVyLTE4R3dJaywgLnBvcG91dC1WY05jSEIsLmNvbnRhaW5lci0yTzFVZ1osIC5jb250YWluZXItMlJSRkhLLCAucG9wb3V0Q29udGFpbmVyLTFNWGRxTiwucm9vdC1TUjhjUWEsIC5xdWlja3N3aXRjaGVyLXBLY005VSwgLmNvZGUuaW5saW5lLCAubWFya3VwLTJCT3ctaiBjb2RlLCBjb2RlLCAuYXR0YWNobWVudC0xUFpaQjIsLnJlY2VudE1lbnRpb25zUG9wb3V0LTNyQ2lJNiwgLmNoYW5uZWxIZWFkZXItM0dkMnhxLCAuY29udGFpbmVyLTJlYk1QUC5yZWNlbnRNZW50aW9uc1BvcG91dC0yYkkxWk4sIC5jb250ZW50V3JhcHBlci0zdkhOUDIsIC5yZWFjdGlvbi0zdndBRjIsLmVtb2ppUGlja2VyLTZZQ2s4YSwgLndyYXBwZXItMnZJTWtULCAubWVzc2FnZXNQb3BvdXRXcmFwLTN6cnlIVywuc2VhcmNoUmVzdWx0c1dyYXAtNVJWT2t4LCAuY29udGFpbmVyLTNYZ0FIdiwgLmVtYmVkRnVsbC0xSEdWMlMsIC53cmFwcGVyLTFISUgwaiwgLnBvcG91dC0xS0hOQXEge2JhY2tncm91bmQtY29sb3I6JHtlPyJyZ2JhKDAsMCwwLDAuNzgpIjoicmdiYSgyNTUsMjU1LDI1NSwwLjg1KSJ9ICFpbXBvcnRhbnQ7fWRpdltjbGFzcz1ncm91cFN0YXJ0LTNNbGd2MV06bm90KC5tZXNzYWdlLTJDU2huMykge2Rpc3BsYXk6IG5vbmU7fSNUUkFOU1BBUkVOQ1lfX0FDVElPTlMge2ZvbnQtZmFtaWx5OiAiV2hpdG5leSIsICJIZWx2ZXRpY2EgTmV1ZSIsICJIZWx2ZXRpY2EiLCBtb25vc3BhY2UsICJBcmlhbCIsIHNhbnMtc2VyaWY7d2lkdGg6IDMwJTtoZWlnaHQ6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDt6LWluZGV4OiAyMDA7YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO3RyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO30uVFJBTlNQQVJFTkNZX19BQ1RJT05TLS1TTElERS1JTiB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7fS5UUkFOU1BBUkVOQ1lfX0FMRVJUIHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiBhdXRvO3BhZGRpbmc6IDIwcHg7Zm9udC1zaXplOiAxNHB4O3dpZHRoOiBmaXQtY29udGVudDt3aWR0aDogLW1vei1maXQtY29udGVudDttYXgtd2lkdGg6IDQ1MHB4O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtjb2xvcjogd2hpdGU7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDt6LWluZGV4OiAxMDAwMDtib3gtc2hhZG93OiAwcHggMTNweCAxMHB4IC01cHggcmdiYSgwLDAsMCwwLjUpO3RyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO2FuaW1hdGlvbjogVFJBTlNQQVJFTkNZX19BTEVSVC1TTElERSA1MDBtcyBlYXNlO31Aa2V5ZnJhbWVzIFRSQU5TUEFSRU5DWV9fQUxFUlQtU0xJREUge2Zyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpOyB9dG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgfX0uVFJBTlNQQVJFTkNZX19BTEVSVC0tSU5BQ1RJVkUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwJSk7fS5UUkFOU1BBUkVOQ1lfX0ZBREUtSU4ge2FuaW1hdGlvbjogZmFkZUluIDUwMG1zIGVhc2UgZm9yd2FyZHM7fUBrZXlmcmFtZXMgZmFkZUluIHt0byB7IG9wYWNpdHk6IDE7IH19YH0oe2JhY2tncm91bmRJbWFnZVVSTDp3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oImJnSW1nIil8fCIiLGJyaWdodG5lc3NMZXZlbDpwLGlzRGFya1RoZW1lOmN9KTshZnVuY3Rpb24oKXtjb25zdCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJUUkFOU1BBUkVOQ1kiKTtudWxsIT09ZSYmKHdpbmRvdy5vbmtleWRvd249bnVsbCxlLnJlbW92ZSgpKX0oKTtjb25zdCB1PWUoe2VsZW1lbnROYW1lOiJzdHlsZSIsYXBwZW5kVG86ZG9jdW1lbnQuaGVhZCxodG1sUHJvcHM6e2lkOiJUUkFOU1BBUkVOQ1kiLGlubmVySFRNTDptfX0pO24oe3RleHQ6IldlbGNvbWUhIDxicj48YnI+VG8gdG9nZ2xlIHRoZSBhY3Rpb25zIHBhbmVsLCBwcmVzcyA8Yj5DVFJMICsgU0hJRlQgKyBYPC9iPjxicj5UbyB0b2dnbGUgdGhlIHRoZW1lLCBwcmVzcyA8Yj5DVFJMICsgRDwvYj4iLHRpbWVvdXQ6MWU0LGNvbnRhaW5zSFRNTDohMH0pLnRoZW4oKCgpPT57ZCYmbih7dGV4dDoiPGI+8J+bkSBXYXJuaW5nPC9iPjxicj48YnI+WW91ciBzaWRlYmFyIGlzIGN1cnJlbnRseSBkYXJrIHRoZW1lZC48YnI+Rm9yIHByb3BlciB0ZXh0IHZpc2liaWxpdHksIGRpc2FibGUgaXRzIGRhcmsgdGhlbWUgaW4gU2V0dGluZ3MgPiBBcHBlYXJhbmNlLiA8dT5ObyBuZWVkIHRvIHJlZnJlc2g8L3U+LiIsdGltZW91dDoxZTQsY29udGFpbnNIVE1MOiEwfSl9KSksd2luZG93Lm9ua2V5ZG93bj1uPT57aWYobi5jdHJsS2V5KWlmKG4uc2hpZnRLZXkmJiJLZXlYIj09PW4uY29kZSl7bi5wcmV2ZW50RGVmYXVsdCgpO3RyeXshZnVuY3Rpb24oe2FjdGlvbnM6dCxwcm9wczpufSl7Y29uc3Qgbz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiVFJBTlNQQVJFTkNZX19BQ1RJT05TIik7aWYobnVsbCE9PW8pcmV0dXJuIG8uY2xhc3NMaXN0LnJlbW92ZSgiVFJBTlNQQVJFTkNZX19BQ1RJT05TLS1TTElERS1JTiIpLHZvaWQgc2V0VGltZW91dCgoKCk9Pm8ucmVtb3ZlKCkpLDFlMyk7Y29uc3QgYT1lKHtlbGVtZW50TmFtZToiZGl2IixhcHBlbmRUbzpkb2N1bWVudC5ib2R5LGh0bWxQcm9wczp7aWQ6IlRSQU5TUEFSRU5DWV9fQUNUSU9OUyJ9fSk7bnVsbCE9PW4ub3ZlcmxheUJhckVsZW1lbnQmJihhLnN0eWxlLnBhZGRpbmdUb3A9IjIwcHgiKSxzZXRUaW1lb3V0KCgoKT0+YS5jbGFzc0xpc3QuYWRkKCJUUkFOU1BBUkVOQ1lfX0FDVElPTlMtLVNMSURFLUlOIikpLDApLGUoe2VsZW1lbnROYW1lOiJzdHlsZSIsYXBwZW5kVG86YSxodG1sUHJvcHM6e2lubmVySFRNTDoiLlRSQU5TUEFSRU5DWV9fQUNUSU9OIHttaW4taGVpZ2h0OiAyMDBweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7bWFyZ2luOiAxMHB4O2NvbG9yOiB3aGl0ZTtjdXJzb3I6IHBvaW50ZXI7ZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7fS5UUkFOU1BBUkVOQ1lfX0FDVElPTi0tQUNUSVZFIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7Y3Vyc29yOiBpbml0aWFsO30uVFJBTlNQQVJFTkNZX19BQ1RJT04tSU5QVVQge2JveC1zaXppbmc6IGJvcmRlci1ib3g7dGV4dC1hbGlnbjogY2VudGVyO2hlaWdodDogNDBweDt3aWR0aDogODUlO21hcmdpbjogMTBweCAwIDA7Ym9yZGVyOiAwO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtib3JkZXItcmFkaXVzOiA1MHB4O2NvbG9yOiB3aGl0ZTt9LlRSQU5TUEFSRU5DWV9fQUNUSU9OLUlOUFVUOmZvY3VzLCNUUkFOU1BBUkVOQ1lfX0FDVElPTi1TQVZFLUJSSUdIVE5FU1M6Zm9jdXMge291dGxpbmU6IG5vbmU7Ym9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTt9I1RSQU5TUEFSRU5DWV9fQUNUSU9OLUJSSUdIVE5FU1MtTEVWRUwge21hcmdpbjogMDtvcGFjaXR5OiAwLjg7dGV4dC1hbGlnbjogY2VudGVyO30jVFJBTlNQQVJFTkNZX19BQ1RJT04tV0FSTklORyB7Zm9udC1zaXplOiAxMXB4O2xpbmUtaGVpZ2h0OiAyMHB4O3BhZGRpbmc6IDEwcHg7Y29sb3I6IHdoaXRlO21heC13aWR0aDogMzEwcHg7bWFyZ2luOiAxMHB4IDAgMDtvcGFjaXR5OiAwLjg7fSNUUkFOU1BBUkVOQ1lfX0FDVElPTi1TQVZFLUJSSUdIVE5FU1Mge2hlaWdodDogNDBweDtwYWRkaW5nOiAwIDE1cHg7bWF4LXdpZHRoOiAzMDBweDttYXJnaW4tdG9wOiAxMHB4O2JvcmRlcjogMDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7Ym9yZGVyLXJhZGl1czogNTBweDtjb2xvcjogd2hpdGU7Y3Vyc29yOiBwb2ludGVyO30ifX0pO2Zvcihjb25zdCBvIG9mIHQpe2NvbnN0IHQ9ZSh7ZWxlbWVudE5hbWU6ImRpdiIsYXBwZW5kVG86YSxodG1sUHJvcHM6e2NsYXNzTmFtZToiVFJBTlNQQVJFTkNZX19BQ1RJT04iLHRleHRDb250ZW50Om8ubmFtZSxvbmNsaWNrOigpPT5yKHthY3Rpb246byxhY3Rpb25Ub2dnbGVyOnQsYWN0aW9uUHJvcHM6bn0pfX0pfX0oe2FjdGlvbnM6byxwcm9wczp7aXNEYXJrVGhlbWU6YyxicmlnaHRuZXNzTGV2ZWw6cCxtYWluU3R5bGVzaGVldDp1LG92ZXJsYXlEYXJrZW5lckVsZW1lbnQ6bCxvdmVybGF5QmFyRWxlbWVudDpzfX0pfWNhdGNoKGUpe2FsZXJ0KHQoZS5tZXNzYWdlKSl9fWVsc2UgaWYoIktleUQiPT09bi5jb2RlKXtuLnByZXZlbnREZWZhdWx0KCk7dHJ5eyFmdW5jdGlvbih7aXNEYXJrVGhlbWU6ZSxicmlnaHRuZXNzTGV2ZWw6dCxtYWluU3R5bGVzaGVldDpuLG92ZXJsYXlCYXJFbGVtZW50Om99KXtpZihuLmdldEF0dHJpYnV0ZSgibWVkaWEiKSlyZXR1cm4gbi5yZW1vdmVBdHRyaWJ1dGUoIm1lZGlhIiksdm9pZChudWxsIT09byYmKG8uc3R5bGUuYmFja2dyb3VuZENvbG9yPWU/YHJnYmEoMCwwLDAsMC4ke3QudmFsdWV9YDpgcmdiYSgyNTUsMjU1LDI1NSwwLiR7dC52YWx1ZX1gKSk7bi5zZXRBdHRyaWJ1dGUoIm1lZGlhIiwiMXB4IiksbnVsbCE9PW8mJihvLnN0eWxlLmJhY2tncm91bmRDb2xvcj0idmFyKC0tY29sb3ItdGVydGlhcnkpIil9KHttYWluU3R5bGVzaGVldDp1LGlzRGFya1RoZW1lOmMsYnJpZ2h0bmVzc0xldmVsOnAsb3ZlcmxheUJhckVsZW1lbnQ6c30pfWNhdGNoKGUpe2FsZXJ0KHQoZS5tZXNzYWdlKSl9fX19KCl9KSgpOw==",
      "base64"
    ).toString("utf8")
  );
});
