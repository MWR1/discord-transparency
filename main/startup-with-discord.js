mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.webContents.executeJavaScript(
          Buffer.from(
            "KCgpPT57InVzZSBzdHJpY3QiO2NvbnN0IGU9Il9fQkFDS0dST1VORC1JTUFHRV9fIix0PSJfX0JSSUdIVE5FU1NfXyIsbj0iX19CTFVSX18iLHI9IlRSQU5TUEFSRU5DWSIsbz1gJHtyfV9fQUNUSU9OUy1QQU5FTGAsYT1gJHtvfS1PVkVSTEFZYCxsPWAke3J9X19BQ1RJT05TX1BBTkVMYCxzPWAke3J9X19BTEVSVFMtU1RZTEVTSEVFVGAsaT1gJHtyfV9fSU1BR0UtSU5QVVQtUElDS0VSYCxjPWAke3J9X19TRVQtQkFDS0dST1VORGAsZD0idGhlbWUtZGFyayIsdT0idGhlbWUtbGlnaHQiLG09YCR7cn1fX0FMRVJUYCxwPWAke219LS1JTkFDVElWRWAsZz1gJHtvfS0tU0xJREUtSU5gLGI9YCR7cn1fX0FDVElPTmAsaD1gJHtifS0tQUNUSVZFYCxmPWAke2J9LVdBUk5JTkdgLF89YCR7Yn0tSU5QVVRgLHk9YCR7Yn1fX0lOUFVULVBJQ0tFUmAsdj1gJHtifS1MRVZFTC1JTkRJQ0FUT1JgLCQ9YCR7Yn0tU0FWRS1MRVZFTGAsdz1uZXcgTWFwLHg9bmV3IE1hcCxrPW5ldyBNYXA7ZnVuY3Rpb24gVChlKXtjb25zdCB0PXcuZ2V0KCJtYWluU3R5bGVTaGVldCIpLG49dy5nZXQoInRpdGxlQmFyRWxlbWVudCIpO2lmKCF0Lmhhc0F0dHJpYnV0ZSgibWVkaWEiKSlyZXR1cm4gdC5zZXRBdHRyaWJ1dGUoIm1lZGlhIiwiMXB4IiksbnVsbCE9PW4mJihuLnN0eWxlLmJhY2tncm91bmRDb2xvcj0idmFyKC0tY29sb3ItdGVydGlhcnkpIiksdm9pZChlLnN0eWxlLmRpc3BsYXk9Im5vbmUiKTtjb25zdCByPWsuZ2V0KCJpc0RhcmtUaGVtZSIpLG89ay5nZXQoImJyaWdodG5lc3MiKTt0LnJlbW92ZUF0dHJpYnV0ZSgibWVkaWEiKSxudWxsIT09biYmKG4uc3R5bGUuYmFja2dyb3VuZENvbG9yPXI/YHJnYmEoMCwwLDAsMC4ke299YDpgcmdiYSgyNTUsMjU1LDI1NSwwLiR7b31gKSxlLmNsYXNzTGlzdC5jb250YWlucyhnKSYmKGUuc3R5bGUuZGlzcGxheT0iYmxvY2siKX1jb25zdCBFPSJQcmVzcyBoZXJlIHRvIGJyb3dzZSBmb3IgYW4gaW1hZ2Ugb24geW91ciBjb21wdXRlciIsTj0iU2V0IGFzIGJhY2tncm91bmQgaW1hZ2Ug8J+MnyI7ZnVuY3Rpb24gUyhlKXtyZXR1cm5g8J+bkSBPaCBubywgdGhlcmUncyBiZWVuIGFuIGVycm9yLiBJZiB5b3Ugc2VlIHRoaXMsIGpvaW4gdGhlIHN1cHBvcnQgc2VydmVyLCBhbmQgcmVwb3J0IHRoZSBlcnJvci4gW1ske2V9XV1gfWNvbnN0IEw9YC4ke2J9IHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XG59XG5cbi4ke2h9IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbi4ke199IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uJHt5fSB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi4ke199OmZvY3VzLFxuLiR7JH06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xufVxuXG4uJHt2fSB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC44O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi4ke2Z9IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDMxMHB4O1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi4ke199OmZvY3VzIH4gLiR7Zn0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLiR7JH0ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jJHtjfSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufWAsQz1gLiR7bX0geyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC41KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG4gIGFuaW1hdGlvbjogVFJBTlNQQVJFTkNZX19BTEVSVC1TTElERSA1MDBtcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uJHttfTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICIiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1IDEwMCUgODIlIC8gMSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYW5pbWF0aW9uOiBUUkFOU1BBUkVOQ1lfX0FMRVJULVRJTUVSLUJBUiBsaW5lYXIgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS10aW1lci1iYXItdGltZW91dCk7XG59XG5cbkBrZXlmcmFtZXMgVFJBTlNQQVJFTkNZX19BTEVSVC1USU1FUi1CQVIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9IHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IFxuICB9XG59XG5cbkBrZXlmcmFtZXMgVFJBTlNQQVJFTkNZX19BTEVSVC1TTElERSB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIH1cbn1cblxuLiR7cH0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpO1xufWAsUj0iLnR5cGVXaW5kb3dzX2E5MzRkOC53aXRoRnJhbWVfYTkzNGQ4LnRpdGxlQmFyX2E5MzRkOCwgIC50eXBlV2luZG93c19hOTM0ZDgud2l0aEZyYW1lX2E5MzRkOC50aXRsZUJhcl9hOTM0ZDgud2l0aEJhY2tncm91bmRPdmVycmlkZV9hOTM0ZDgiLEE9Ii5hcHBfYmQyNmNjIixQPSIubGF5ZXJDb250YWluZXJfY2QwZGU1IixJPSIudG9hc3RfZjQyNzY3IixCPSIuYnJvd3Nlcl9mNTQyZmMiLE09Ii5tZXNzYWdlc1BvcG91dFdyYXBfYWM5MGEyIixEPSIucmVjZW50TWVudGlvbnNQb3BvdXRfZGRiNWI0IixPPSIucXVpY2tzd2l0Y2hlcl9mNGUxMzkiLEg9Ii5jb250YWluZXJfZjI0YTk2IixLPSIucG9wb3V0X2Y2NjM5ZCIsWT0iLm1haW5fZTNmOGMyIixWPSIuYXBwbGljYXRpb25TdG9yZV9jZWNjODYiLFc9Ii5jb250YWluZXItM3dMS0RlIixVPSIudGhlbWVkLUhwMUtDXyIsej0iLmRpcmVjdG9yeUNvbnRhaW5lcl9kYTNmNTkiLEY9Ii5oZWFkZXJfZjFmZDljLCAuY29udGFpbmVyX2U0NDMwMiwgLmNoYXRfYTdkNzJlLCAuc2Nyb2xsZXJDb250YWluZXJfYzZiMTFiIixHPSIucGFnZVdyYXBwZXJfYTNhNGNlIixxPSIuc2VhcmNoUmVzdWx0c1dyYXBfYzJiNDdkIixqPSIudGhlbWVFZGl0b3JfYzlkZGE2IixYPSIuZWRpdG9yX2JjZmExZSIsSj0iLmNvbnRhaW5lcl9kMWMyNDYiLFE9Ii53cmFwcGVyX2VjODZhYSIsWj0iLmJsb2NrZWRTeXN0ZW1NZXNzYWdlX2MwOWQwZiIsZWU9Ii5lbWJlZEZ1bGxfYWQwYjcxIix0ZT0iLndyYXBwZXJfYjlmZTc2IixuZT0iLmNvZGUuaW5saW5lLCAubWFya3VwLTJCT3ctaiBjb2RlLCBjb2RlIixyZT0iLmF0dGFjaG1lbnRfYTQ2MjNkIixvZT0iLndyYXBwZXJBdWRpb19mNzJhYWMiLGFlPSIud3JhcHBlcl9lZjMxOWYiLGxlPSIuY29udGFpbmVyX2U0MGMxNiIsc2U9Ii5yZWFjdGlvbl9lYzZiMTkiLGllPSIuaG92ZXJCdXR0b25Hcm91cF9hYjhiMjMiLGNlPSIudXNlclByb2ZpbGVJbm5lclRoZW1lZE5vblByZW1pdW1fYzY5YTdiIixkZT0iLmNvbnRhaW5lcl9hYzIwMWIiLHVlPSIuY29udGVudFdyYXBwZXJfYWY1ZGJiIixtZT0iLndyYXBwZXJfYzZlZTM2IixwZT0iLmNvbnRhaW5lcl9mMmJmYmIsIC5yZWFjdG9yc19mMmJmYmIiLGdlPSIud3JhcHBlcl9lMDY4NTciLGJlPSIud3JhcHBlcl9jNDMwNTkiLGhlPSIucHJlbWl1bVByb21vX2NhOWI1NiIsZmU9Ii5oZWFkZXJfYmQwNWYxIixfZT0iLnByZXZpZXdDb250YWluZXJfZGExYmQ5IjtmdW5jdGlvbiB5ZSgpe2NvbnN0IGU9ay5nZXQoImJyaWdodG5lc3MiKSx0PWsuZ2V0KCJpc0RhcmtUaGVtZSIpLG49dD9gcmdiYSgwLCAwLCAwLCAwLiR7ZX0pYHx8InJnYmEoMCwwLDAsMC45KSI6YHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4ke2V9KWB8fCJyZ2JhKDI1NSwyNTUsMjU1LDAuNykiLHI9dD8icmdiYSgwLDAsMCwwLjc4KSI6InJnYmEoMjU1LDI1NSwyNTUsMC44NSkiLGw9dD8icmdiYSgwLDAsMCwwLjkyKSI6InJnYmEoMjU1LDI1NSwyNTUsMC45NSkiO3JldHVybmAudGhlbWUtZGFyaywgLnRoZW1lLWxpZ2h0IHtcbiAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1jaGFubmVsdGV4dGFyZWEtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1kZXByZWNhdGVkLXBhbmVsLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1zZWNvbmRhcnktYWx0OiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXNjcm9sbGJhci1hdXRvLXRyYWNrOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWhvbWUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRoZW1lLWRhcmsge1xuICAtLXNjcm9sbGJhci1hdXRvLXRodW1iOnJnYmEoMjU1LDI1NSwyNTUsMC4zKSAhaW1wb3J0YW50O1xuICAtLXByb2ZpbGUtYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDsgICBcbn1cblxuLnRoZW1lLWxpZ2h0IHtcbiAgLS1zY3JvbGxiYXItYXV0by10aHVtYjpyZ2JhKDAsMCwwLDAuNikgIWltcG9ydGFudDtcbiAgLS1wcm9maWxlLWJvZHktYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xufVxuXG4jYXBwLW1vdW50IHtcbiAgYmFja2dyb3VuZDogdXJsKCR7KHM9e2JhY2tncm91bmRJbWFnZVVSTDprLmdldCgiYmFja2dyb3VuZEltYWdlVVJMIiksYmx1ckxldmVsUGl4ZWxzOmAke2suZ2V0KCJibHVyIil9cHhgLGJyaWdodG5lc3NMZXZlbFJHQkE6bix2YXJpb3VzRWxlbWVudHNCYWNrZ3JvdW5kOnIsdmFyaW91c0VsZW1lbnRzQmFja2dyb3VuZE1vcmVPcGFxdWU6bH0pLmJhY2tncm91bmRJbWFnZVVSTH0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ke1J9IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYmFja2dyb3VuZDogJHtzLmJyaWdodG5lc3NMZXZlbFJHQkF9O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoJHtzLmJsdXJMZXZlbFBpeGVsc30pXG59XG5cbiR7QX0sICR7an0sICR7WH0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3MuYnJpZ2h0bmVzc0xldmVsUkdCQX07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigke3MuYmx1ckxldmVsUGl4ZWxzfSk7XG59IFxuXG4ke1Z9LCAke1d9LCBcbiR7en0sICR7Rn0sICR7R30sXG4ke1V9IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuJHtkZX0sICR7b2V9LCBcbiR7YWV9LCAke3F9LCAke3VlfSxcbiR7bGV9LCAke3NlfSxcbiR7ZWV9LCAke3JlfSxcbiR7cGV9LCAke3RlfSwgJHtuZX0sXG4ke2ZlfSwgJHtYfSwgJHtKfSwgXG4ke0h9LCAke0t9IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtzLnZhcmlvdXNFbGVtZW50c0JhY2tncm91bmR9ICFpbXBvcnRhbnQ7XG59XG5cbiR7Y2V9LCAke1l9LCAke0R9LFxuJHttZX0sICR7Z2V9LFxuJHtPfSwgJHtNfSwgJHtCfSwgXG4ke0l9LCAke3VlfSwgJHtiZX0sXG4ke2llfSwgJHtoZX0ge1xuYmFja2dyb3VuZC1jb2xvcjogJHtzLnZhcmlvdXNFbGVtZW50c0JhY2tncm91bmRNb3JlT3BhcXVlfSAhaW1wb3J0YW50O1xufVxuXG4ke19lfSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiR7ZmV9IHtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbiR7UX06aGFzKCR7Wn0pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIyR7b30ge1xuICBmb250LWZhbWlseTogIldoaXRuZXkiLCAiSGVsdmV0aWNhIE5ldWUiLCAiSGVsdmV0aWNhIiwgbW9ub3NwYWNlLCAiQXJpYWwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cblxuIyR7YX0ge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTk5O1xufVxuXG4uJHtnfSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xufVxuYDt2YXIgc31mdW5jdGlvbiB2ZSh0KXt3LmdldCgibWFpblN0eWxlU2hlZXQiKS5pbm5lckhUTUwrPWZ1bmN0aW9uKGUpe3JldHVybmAjYXBwLW1vdW50e2JhY2tncm91bmQ6IHVybCgke2V9KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7fWB9KHQpLGsuc2V0KCJiYWNrZ3JvdW5kSW1hZ2VVUkwiLHQpLHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLHQpfWZ1bmN0aW9uICRlKHtlbGVtZW50TmFtZTplLGFwcGVuZFRvOnQsaHRtbFByb3BzOm59KXtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7Zm9yKGNvbnN0W2UsdF1vZiBPYmplY3QuZW50cmllcyhuKSlyW2VdPXQ7aWYodm9pZCAwIT09bi5zdHlsZSlmb3IoY29uc3RbZSx0XW9mIE9iamVjdC5lbnRyaWVzKG4uc3R5bGUpKXIuc3R5bGVbZV09dDtyZXR1cm4gdC5hcHBlbmRDaGlsZChyKSxyfWZ1bmN0aW9uIHdlKHt0ZXh0OmUsdGltZW91dDp0LGNvbnRhaW5zSFRNTDpuPSExfSl7Y29uc3Qgcj0kZSh7ZWxlbWVudE5hbWU6ImRpdiIsYXBwZW5kVG86ZG9jdW1lbnQuYm9keSxodG1sUHJvcHM6e2NsYXNzTmFtZTptLFtuPyJpbm5lckhUTUwiOiJ0ZXh0Q29udGVudCJdOmV9fSk7cmV0dXJuIHIuc3R5bGUuc2V0UHJvcGVydHkoIi0tdGltZXItYmFyLXRpbWVvdXQiLGAke3R9bXNgKSxuZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoKCgpPT57ci5jbGFzc0xpc3QuYWRkKHApLHNldFRpbWVvdXQoKCgpPT57ci5yZW1vdmUoKSxlKCEwKX0pLDFlMyl9KSx0KX0pKX1mdW5jdGlvbiB4ZSgpe2NvbnN0IGU9ay5nZXQoImJsdXIiKTt3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obixlLnRvU3RyaW5nKCkpLHdlKHt0ZXh0OmBCbHVyIGxldmVsIHVwZGF0ZWQhIE5vdyBpdCBpcyBhdCBsZXZlbCA8Yj4ke2V9PC9iPi5gLGNvbnRhaW5zSFRNTDohMCx0aW1lb3V0OjNlM30pfWZ1bmN0aW9uIGtlKCl7Y29uc3QgZT1rLmdldCgiYnJpZ2h0bmVzcyIpO3dpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0LGUudG9TdHJpbmcoKSksd2Uoe3RleHQ6YEJyaWdodG5lc3MgbGV2ZWwgdXBkYXRlZCEgTm93IGl0IGlzIGF0IGxldmVsIDxiPiR7ZX08L2I+LmAsY29udGFpbnNIVE1MOiEwLHRpbWVvdXQ6M2UzfSl9Y29uc3QgVGU9W3tuYW1lOiJDaGFuZ2UgdGhlIGJhY2tncm91bmQgaW1hZ2UiLGV4ZWN1dGUoZSl7Y29uc3QgdD0kZSh7ZWxlbWVudE5hbWU6ImxhYmVsIixhcHBlbmRUbzplLGh0bWxQcm9wczp7Y2xhc3NOYW1lOmAke199ICR7eX1gLGh0bWxGb3I6aSx0ZXh0Q29udGVudDpFfX0pLG49JGUoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e3R5cGU6ImZpbGUiLGlkOmksYWNjZXB0OiJpbWFnZS8qIixzdHlsZTp7ZGlzcGxheToibm9uZSJ9fX0pOyRlKHtlbGVtZW50TmFtZToicCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e3RleHRDb250ZW50OiItIG9yIC0ifX0pO2NvbnN0IHI9JGUoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTpfLHBsYWNlaG9sZGVyOiJQYXN0ZSBpbWFnZSBsaW5rIGhlcmUifX0pOyRlKHtlbGVtZW50TmFtZToicCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTpmLHRleHRDb250ZW50OiLwn5uRIFRoZSBpbWFnZSB5b3Ugd2FudCBhcyB5b3VyIGJhY2tncm91bmQgbXVzdCBiZSBzZW50IGFzIGEgbWVzc2FnZSBvbiBEaXNjb3JkLiBZb3Ugd2lsbCBoYXZlIHRvIGNsaWNrIG9uIHRoZSBpbWFnZSwgcHJlc3Mgb24gPE9wZW4gb3JpZ2luYWw+LCBhbmQgY29weSB0aGUgbGluayBmcm9tIHRoZXJlLiBBZnRlciB0aGF0LCBjbGljayBvbiB0aGlzIGlucHV0IGFuZCBwcmVzcyBFTlRFUi4ifX0pLG4ub25jaGFuZ2U9KCk9PmZ1bmN0aW9uKGUsdCl7aWYobnVsbD09PWUuZmlsZXN8fDA9PT1lLmZpbGVzLmxlbmd0aClyZXR1cm47Y29uc3Qgbj1lLmZpbGVzWzBdLHI9bmV3IEZpbGVSZWFkZXI7ci5yZWFkQXNEYXRhVVJMKG4pLHIuYWRkRXZlbnRMaXN0ZW5lcigibG9hZHN0YXJ0IiwoKCk9Pnt0LnRleHRDb250ZW50PSJMb2FkaW5nIGltYWdlLi4uIn0pKSxyLmFkZEV2ZW50TGlzdGVuZXIoImxvYWRlbmQiLCgoKT0+e2NvbnN0IGU9ci5yZXN1bHQ7aWYobnVsbD09PWUpcmV0dXJuIHZvaWQgd2Uoe3RleHQ6UygiaW1hZ2UgZGF0YSBjb3VsZCBub3QgYmUgcmVhZCIpLHRpbWVvdXQ6MWU0fSk7dmUoZSk7Y29uc3Qgbz1uLm5hbWUuc3BsaXQoIi4iKVsxXXx8Ij8/PyIsYT1uLm5hbWUubGVuZ3RoPjI1P2AoJHtuLm5hbWUuc2xpY2UoMCwyNSl9Li4uKS4ke299YDpuLm5hbWU7dC5pbm5lckhUTUw9bnVsbCE9PW4/YCR7RX0gfCBJbWFnZSBuYW1lOiAke24ubmFtZS5sZW5ndGg+MjU/YDxzcGFuIHRpdGxlPSIke24ubmFtZX0iIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY3Vyc29yOiBoZWxwIj4ke2F9PC9zcGFuPmA6bi5uYW1lfWA6RX0pKSxyLmFkZEV2ZW50TGlzdGVuZXIoImVycm9yIiwoZT0+d2Uoe3RleHQ6UyhgaW1hZ2UgcmVhZGVyIGdhdmUgZXJyb3Ike2UubGVuZ3RoQ29tcHV0YWJsZT9gLCBvbmx5ICR7KGUubG9hZGVkL2UudG90YWwqMTAwKS50b1ByZWNpc2lvbigyKX0lIG9mIGltYWdlIGxvYWRlZGA6IiJ9fWApLHRpbWVvdXQ6MWU0fSkpKX0obix0KSxyLm9ua2V5ZG93bj1lPT57Y29uc3Qgbz1yLnZhbHVlLnRyaW0oKTsiRW50ZXIiPT09ZS5jb2RlJiYiIiE9PW8mJih0LnRleHRDb250ZW50PUUsbi52YWx1ZT0iIix2ZShvKSl9fX0se25hbWU6IkNoYW5nZSB0aGUgYnJpZ2h0bmVzcyBsZXZlbCIsZXhlY3V0ZShlKXtjb25zdCB0PWsuZ2V0KCJpc0RhcmtUaGVtZSIpPyIwLDAsMCI6IjI1NSwyNTUsMjU1IixuPWsuZ2V0KCJicmlnaHRuZXNzIikscj0kZSh7ZWxlbWVudE5hbWU6ImgzIixhcHBlbmRUbzplLGh0bWxQcm9wczp7Y2xhc3NOYW1lOnYsdGV4dENvbnRlbnQ6YEJyaWdodG5lc3MgbGV2ZWw6ICR7bn1gfX0pLG89JGUoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTpfLHR5cGU6InJhbmdlIixtaW46IjAiLG1heDoiOSIsdmFsdWU6bi50b1N0cmluZygpLG9uaW5wdXQ6KCk9PmZ1bmN0aW9uKHtvdmVybGF5Q29sb3I6ZSxicmlnaHRuZXNzTGV2ZWxJbmRpY2F0b3I6dCxicmlnaHRuZXNzTGV2ZWxTbGlkZXI6bn0pe2NvbnN0IHI9dy5nZXQoIm92ZXJsYXlEYXJrZW5lckVsZW1lbnQiKSxvPXcuZ2V0KCJ0aXRsZUJhckVsZW1lbnQiKTtyLnN0eWxlLmJhY2tncm91bmRDb2xvcj1gcmdiYSgke2V9LCAuJHtuLnZhbHVlfSlgLG51bGwhPT1vJiYoby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YHJnYmEoJHtlfSwgLiR7bi52YWx1ZX0pYCksdC50ZXh0Q29udGVudD1gQnJpZ2h0bmVzcyBsZXZlbDogJHtuLnZhbHVlfWAsay5zZXQoImJyaWdodG5lc3MiLHBhcnNlSW50KG4udmFsdWUpKX0oe292ZXJsYXlDb2xvcjp0LGJyaWdodG5lc3NMZXZlbEluZGljYXRvcjpyLGJyaWdodG5lc3NMZXZlbFNsaWRlcjpvfSl9fSk7JGUoe2VsZW1lbnROYW1lOiJidXR0b24iLGFwcGVuZFRvOmUsaHRtbFByb3BzOntjbGFzc05hbWU6JCx0ZXh0Q29udGVudDoiU2F2ZSBicmlnaHRuZXNzIGxldmVsIixvbmNsaWNrOmtlfX0pfX0se25hbWU6IkNoYW5nZSB0aGUgYmx1ciBsZXZlbCIsZXhlY3V0ZShlKXtjb25zdCB0PWsuZ2V0KCJibHVyIiksbj0kZSh7ZWxlbWVudE5hbWU6ImgzIixhcHBlbmRUbzplLGh0bWxQcm9wczp7Y2xhc3NOYW1lOnYsdGV4dENvbnRlbnQ6YEJsdXIgbGV2ZWw6ICR7dH1gfX0pLHI9JGUoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTpfLHR5cGU6InJhbmdlIixtaW46IjAiLG1heDoiNTAiLHZhbHVlOnQudG9TdHJpbmcoKSxvbmlucHV0OigpPT5mdW5jdGlvbihlLHQpe2NvbnN0IG49dy5nZXQoIm92ZXJsYXlEYXJrZW5lckVsZW1lbnQiKSxyPXcuZ2V0KCJ0aXRsZUJhckVsZW1lbnQiKTtuLnN0eWxlLmJhY2tkcm9wRmlsdGVyPWBibHVyKCR7dC52YWx1ZX1weClgLG51bGwhPT1yJiYoci5zdHlsZS5iYWNrZHJvcEZpbHRlcj1gYmx1cigke3QudmFsdWV9cHgpYCksZS50ZXh0Q29udGVudD1gQmx1ciBsZXZlbDogJHt0LnZhbHVlfWAsay5zZXQoImJsdXIiLHBhcnNlSW50KHQudmFsdWUpKX0obixyKX19KTskZSh7ZWxlbWVudE5hbWU6ImJ1dHRvbiIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTokLHRleHRDb250ZW50OiJTYXZlIGJsdXIgbGV2ZWwiLG9uY2xpY2s6eGV9fSl9fV07ZnVuY3Rpb24gRWUoZSx0KXt0LmNsYXNzTGlzdC5hZGQoaCksdC50ZXh0Q29udGVudD0iIjt0cnl7dC5vbmNsaWNrPW51bGwsZS5leGVjdXRlKHQpfWNhdGNoKGUpe2FsZXJ0KFMoZS5tZXNzYWdlKSl9fWNsYXNzIE5le2NvbnN0cnVjdG9yKGUpe3RoaXMudGFyZ2V0RWxlbWVudD1lLHRoaXMuX29ic2VydmVyPW5ldyBNdXRhdGlvbk9ic2VydmVyKCgoZSx0KT0+e2lmKG51bGw9PT10aGlzLl9jYWxsYmFjayl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoIk5vIGNhbGxiYWNrIGhhcyBiZWVuIHN1cHBsaWVkIG9uIHRyaWdnZXIuIik7Zm9yKGNvbnN0IG4gb2YgZSl7Y29uc3QgZT1uLnRhcmdldDtpZigiY2hpbGRMaXN0IiE9PW4udHlwZXx8IWUuY2xhc3NMaXN0LmNvbnRhaW5zKFAuc2xpY2UoMSkpfHxudWxsPT09ZS5maXJzdENoaWxkKXJldHVybjt0aGlzLl9jYWxsYmFjayhuLHQpfX0pKX1vblRyaWdnZXIoZSl7cmV0dXJuIGUmJih0aGlzLl9jYWxsYmFjaz1lKSx0aGlzfW9ic2VydmUoZSl7cmV0dXJuIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXRFbGVtZW50LGUpLHRoaXN9dW5vYnNlcnZlKCl7cmV0dXJuIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSx0aGlzfX1sZXQgU2U7ZnVuY3Rpb24gTGUoZSl7aWYoY2xlYXJUaW1lb3V0KFNlKSxudWxsPT09ZS50YXJnZXQpcmV0dXJuO2NvbnN0IHQ9ZS50YXJnZXQ7aWYoIkEiIT09dC5ub2RlTmFtZXx8IXQuaGFzQXR0cmlidXRlKCJocmVmIil8fCF0LmhyZWYuaW5jbHVkZXMoImNkbi5kaXNjb3JkIikpcmV0dXJuO2xldCBuPW51bGw7Y29uc3Qgcj1uZXcgTmUoZG9jdW1lbnQuYm9keSk7dHJ5e3Iub25UcmlnZ2VyKChlPT57Y29uc3Qgbz1lLnRhcmdldDtuPW8ucXVlcnlTZWxlY3RvcigiLm1lbnVfXzA4OGY3IiksbnVsbCE9PW4mJiJtZW51Ij09PW4ucm9sZSYmKENlKG4sdCksY2xlYXJUaW1lb3V0KFNlKSxyLnVub2JzZXJ2ZSgpLHguZGVsZXRlKCJjb250ZXh0TWVudUNyZWF0aW9uT2JzZXJ2ZXIiKSl9KSkub2JzZXJ2ZSh7c3VidHJlZTohMCxjaGlsZExpc3Q6ITB9KX1jYXRjaChlKXtyZXR1cm4gdm9pZCBhbGVydChTKGUubWVzc2FnZSkpfXguc2V0KCJjb250ZXh0TWVudUNyZWF0aW9uT2JzZXJ2ZXIiLHIpLFNlPXNldFRpbWVvdXQoKCgpPT57ci51bm9ic2VydmUoKSx4LmRlbGV0ZSgiY29udGV4dE1lbnVDcmVhdGlvbk9ic2VydmVyIiksbj1mdW5jdGlvbigpe2NvbnN0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFApKTtpZigwPT09ZS5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKGNvbnN0IHQgb2YgZSl7Y29uc3QgZT10LnF1ZXJ5U2VsZWN0b3IoImRpdltyb2xlPSdtZW51J10iKTtpZihudWxsPT1lP3ZvaWQgMDplLmNsYXNzTmFtZS5pbmNsdWRlcygibWVudSIpKXJldHVybiBlfXJldHVybiBudWxsfSgpLG51bGwhPT1uJiZDZShuLHQpfSksNWUzKX1mdW5jdGlvbiBDZShlLHQpe2NvbnN0IG49ay5nZXQoImlzRGFya1RoZW1lIik7JGUoe2VsZW1lbnROYW1lOiJidXR0b24iLGFwcGVuZFRvOmUsaHRtbFByb3BzOntpZDpjLHRleHRDb250ZW50Ok4sc3R5bGU6e2NvbG9yOm4/ImdvbGQiOiIjN2M3MzAwIixib3hTaGFkb3c6IjBweCAwcHggMTNweCAwcHggIisobj8iaHNsKDUxZGVnIDEwMCUgNTAlIC8gNDUlKSI6ImhzbCg1MWRlZyAxMDAlIDIyJSAvIDQ1JSkiKX19fSkub25jbGljaz0oKT0+dmUodC5ocmVmKX1mdW5jdGlvbiBSZSh7bGVnYWN5U3RvcmFnZUtleTplLG5ld1N0b3JhZ2VLZXk6dCxkZWZhdWx0VmFsdWU6bn0pe3RyeXtsZXQgcj13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odCk7cmV0dXJuIG51bGw9PT1yJiYocj13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oZSksbnVsbD09PXI/cj1uOih3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZSksd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHQscikpKSwhMH1jYXRjaChlKXtyZXR1cm4gYWxlcnQoUyhlLm1lc3NhZ2UpKSwhMX19Y2xhc3MgQWV7Y29uc3RydWN0b3Ioe3RhcmdldEVsZW1lbnQ6ZSxmcm9tOnQsdG86bn0pe3RoaXMuX2NhbGxiYWNrPW51bGwsdGhpcy50YXJnZXRFbGVtZW50PWUsdGhpcy5fZnJvbT10LHRoaXMuX3RvPW4sdGhpcy5fd2FzQ2xhc3NOYW1lUHJldmlvdXNseVByZXNlbnQ9IXRoaXMudGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fZnJvbSkmJnRoaXMudGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fdG8pLHRoaXMuX29ic2VydmVyPW5ldyBNdXRhdGlvbk9ic2VydmVyKCgoZSx0KT0+e2lmKG51bGw9PT10aGlzLl9jYWxsYmFjayl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoIk5vIGNhbGxiYWNrIGhhcyBiZWVuIHN1cHBsaWVkIG9uIGNsYXNzIGNoYW5nZS4iKTtmb3IoY29uc3QgbiBvZiBlKXtpZigiYXR0cmlidXRlcyIhPT1uLnR5cGV8fCJjbGFzcyIhPT1uLmF0dHJpYnV0ZU5hbWUpY29udGludWU7Y29uc3QgZT1uLnRhcmdldCxyPSFlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9mcm9tKSYmZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fdG8pO3IhPT10aGlzLl93YXNDbGFzc05hbWVQcmV2aW91c2x5UHJlc2VudCYmKHRoaXMuX3dhc0NsYXNzTmFtZVByZXZpb3VzbHlQcmVzZW50PXIsdGhpcy5fY2FsbGJhY2sobix0KSl9fSkpfW9uVHJpZ2dlcihlKXtyZXR1cm4gdGhpcy5fY2FsbGJhY2s9ZSx0aGlzfW9ic2VydmUoZSl7cmV0dXJuIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXRFbGVtZW50LGUpLHRoaXN9dW5vYnNlcnZlKCl7cmV0dXJuIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSx0aGlzfX1mdW5jdGlvbiBQZSgpe2NvbnN0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQociksdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKSxuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG8pLGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSksYz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChsKTtpZihudWxsPT10fHx0LnJlbW92ZSgpLG51bGw9PW58fG4ucmVtb3ZlKCksbnVsbD09aXx8aS5yZW1vdmUoKSxudWxsPT1jfHxjLnJlbW92ZSgpLG51bGwhPT1lJiYod2luZG93Lm9ua2V5ZG93bj1udWxsLGUucmVtb3ZlKCkpLHdpbmRvdy5fX1RSQU5TUEFSRU5DWV9PQlNFUlZFUlNfXyl7Zm9yKGNvbnN0IGUgb2Ygd2luZG93Ll9fVFJBTlNQQVJFTkNZX09CU0VSVkVSU19fLnZhbHVlcygpKWUudW5vYnNlcnZlKCk7d2luZG93Ll9fVFJBTlNQQVJFTkNZX09CU0VSVkVSU19fPXZvaWQgMH19IWZ1bmN0aW9uKCl7aWYoUGUoKSwhKGZ1bmN0aW9uKCl7Y29uc3QgZT0kZSh7ZWxlbWVudE5hbWU6ImlmcmFtZSIsYXBwZW5kVG86ZG9jdW1lbnQuYm9keSxodG1sUHJvcHM6e319KTtyZXR1cm4gZS5zdHlsZS5kaXNwbGF5PSJub25lIixudWxsPT09ZS5jb250ZW50V2luZG93PyhhbGVydChTKCJDb3VsZCBub3QgY3JlYXRlIHRoZSBsb2NhbFN0b3JhZ2Ugb2JqZWN0IGJlY2F1c2UgdGhlIGlmcmFtZSdzIGNvbnRlbnRXaW5kb3cgaXNuJ3QgZGVmaW5lZC4iKSksITEpOih3aW5kb3cubG9jYWxTdG9yYWdlPWUuY29udGVudFdpbmRvdy5sb2NhbFN0b3JhZ2UsITApfSgpJiZSZSh7bGVnYWN5U3RvcmFnZUtleToiYmdJbWciLG5ld1N0b3JhZ2VLZXk6ZSxkZWZhdWx0VmFsdWU6IiJ9KSYmUmUoe2xlZ2FjeVN0b3JhZ2VLZXk6ImJyZ2h0bnMiLG5ld1N0b3JhZ2VLZXk6dCxkZWZhdWx0VmFsdWU6IjkifSkpfHwoay5zZXQoImlzRGFya1RoZW1lIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGQpKS5zZXQoImJyaWdodG5lc3MiLHBhcnNlSW50KG51bGwhPT0oaT13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odCkpJiZ2b2lkIDAhPT1pP2k6InVuc2V0Iil8fDkpLnNldCgiYmx1ciIscGFyc2VJbnQobnVsbCE9PShjPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShuKSkmJnZvaWQgMCE9PWM/YzoidW5zZXQiKXx8MCkuc2V0KCJiYWNrZ3JvdW5kSW1hZ2VVUkwiLG51bGwhPT0obT13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oZSkpJiZ2b2lkIDAhPT1tP206IiIpLDApfHwhZnVuY3Rpb24oKXtjb25zdCBlPWsuZ2V0KCJpc0RhcmtUaGVtZSIpLHQ9bmV3IEFlKHt0YXJnZXRFbGVtZW50OmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxmcm9tOmU/ZDp1LHRvOmU/dTpkfSk7dHJ5e3Qub25UcmlnZ2VyKCgoKT0+e3dlKHt0ZXh0OiLwn5uRIEl0IGxvb2tzIGxpa2UgdGhlIHRoZW1lIGhhcyBjaGFuZ2VkLiBEaXNjb3JkIHdpbGwgcmVmcmVzaCBpbiA1IHNlY29uZHMuIix0aW1lb3V0OjVlM30pLnRoZW4oKCgpPT57dC51bm9ic2VydmUoKSxsb2NhdGlvbi5yZWxvYWQoKX0pKX0pKS5vYnNlcnZlKHthdHRyaWJ1dGVzOiEwLGF0dHJpYnV0ZUZpbHRlcjpbImNsYXNzIl19KX1jYXRjaChlKXtyZXR1cm4gYWxlcnQoUyhlLm1lc3NhZ2UpKSwhMX1yZXR1cm4geC5zZXQoInRoZW1lQ2hhbmdlT2JzZXJ2ZXIiLHQpLCEwfSgpfHwod2luZG93Ll9fVFJBTlNQQVJFTkNZX09CU0VSVkVSU19fPXgsMCl8fCFmdW5jdGlvbigpe2NvbnN0IGU9ZnVuY3Rpb24oZSl7Y29uc3QgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO3JldHVybiBudWxsPT09dD8oYWxlcnQoUyhgJHtlfSBpcyBub3QgaW4gdGhlIERPTS5gKSksbnVsbCk6dH0oQSk7aWYobnVsbD09PWUpcmV0dXJuITE7Y29uc3QgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFIpLG49JGUoe2VsZW1lbnROYW1lOiJzdHlsZSIsYXBwZW5kVG86ZG9jdW1lbnQuaGVhZCxodG1sUHJvcHM6e2lkOnIsaW5uZXJIVE1MOnllKCl9fSk7cmV0dXJuIHcuc2V0KCJ0aXRsZUJhckVsZW1lbnQiLHQpLnNldCgib3ZlcmxheURhcmtlbmVyRWxlbWVudCIsZSkuc2V0KCJtYWluU3R5bGVTaGVldCIsbiksITB9KCkpcmV0dXJuIHZvaWQgUGUoKTt2YXIgaSxjLG07JGUoe2VsZW1lbnROYW1lOiJzdHlsZSIsYXBwZW5kVG86ZG9jdW1lbnQuaGVhZCxodG1sUHJvcHM6e2lkOnMsaW5uZXJIVE1MOkN9fSk7Y29uc3R7YWN0aW9uc1BhbmVsOnAsdG9nZ2xlQWN0aW9uc1BhbmVsOmh9PWZ1bmN0aW9uKCl7Y29uc3QgZT0kZSh7ZWxlbWVudE5hbWU6ImRpdiIsYXBwZW5kVG86ZG9jdW1lbnQuYm9keSxodG1sUHJvcHM6e2lkOm99fSksdD0kZSh7ZWxlbWVudE5hbWU6ImRpdiIsYXBwZW5kVG86ZG9jdW1lbnQuYm9keSxodG1sUHJvcHM6e2lkOmF9fSksbj1mdW5jdGlvbihlLHQpe2NvbnN0IG49dy5nZXQoIm1haW5TdHlsZVNoZWV0Iik7bGV0IHI7cmV0dXJuIGZ1bmN0aW9uKCl7Y29uc3Qgbz1lLmNsYXNzTGlzdC5jb250YWlucyhnKSxhPW4uaGFzQXR0cmlidXRlKCJtZWRpYSIpO2lmKGNsZWFyVGltZW91dChyKSwhbyYmIWEpcmV0dXJuIGUuc3R5bGUuZGlzcGxheT0iYmxvY2siLHQuc3R5bGUuZGlzcGxheT0iYmxvY2siLHZvaWQgc2V0VGltZW91dCgoKCk9PmUuY2xhc3NMaXN0LmFkZChnKSksMjApO28mJihlLmNsYXNzTGlzdC5yZW1vdmUoZyksdC5zdHlsZS5kaXNwbGF5PSJub25lIixyPXNldFRpbWVvdXQoKCgpPT57ZS5zdHlsZS5kaXNwbGF5PSJub25lIn0pLDFlMykpfX0oZSx0KTt0Lm9uY2xpY2s9biwkZSh7ZWxlbWVudE5hbWU6InN0eWxlIixhcHBlbmRUbzpkb2N1bWVudC5oZWFkLGh0bWxQcm9wczp7aWQ6bCxpbm5lckhUTUw6TH19KSxudWxsIT09dy5nZXQoInRpdGxlQmFyRWxlbWVudCIpJiYoZS5zdHlsZS5wYWRkaW5nVG9wPSIyMHB4Iik7Zm9yKGNvbnN0IHQgb2YgVGUpe2NvbnN0IG49JGUoe2VsZW1lbnROYW1lOiJkaXYiLGFwcGVuZFRvOmUsaHRtbFByb3BzOntjbGFzc05hbWU6Yix0ZXh0Q29udGVudDp0Lm5hbWV9fSk7bi5vbmNsaWNrPSgpPT5FZSh0LG4pfXJldHVybnthY3Rpb25zUGFuZWw6ZSx0b2dnbGVBY3Rpb25zUGFuZWw6bn19KCk7d2Uoe3RleHQ6IldlbGNvbWUhIDxicj48YnI+VG8gdG9nZ2xlIHRoZSBhY3Rpb25zIHBhbmVsLCBwcmVzcyA8Yj5DVFJMICsgU0hJRlQgKyBYPC9iPjxicj5UbyB0b2dnbGUgdGhlIHRoZW1lLCBwcmVzcyA8Yj5DVFJMICsgRDwvYj4iLHRpbWVvdXQ6MWU0LGNvbnRhaW5zSFRNTDohMH0pLnRoZW4oKCgpPT57KGZ1bmN0aW9uKCl7Y29uc3QgZT1rLmdldCgiaXNEYXJrVGhlbWUiKSx0PXcuZ2V0KCJ0aXRsZUJhckVsZW1lbnQiKTtpZihudWxsIT09dClyZXR1cm4hZSYmdC5jbGFzc0xpc3QuY29udGFpbnMoZCk7Y29uc3Qgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIuYmdfXzdhZGJmIik7cmV0dXJuIG51bGwhPT1uJiYhZSYmbi5jbGFzc0xpc3QuY29udGFpbnMoZCl9KSgpJiYod2Uoe3RleHQ6IjxiPvCfm5EgV2FybmluZzwvYj48YnI+PGJyPllvdXIgc2lkZWJhciBpcyBjdXJyZW50bHkgZGFyayB0aGVtZWQuPGJyPkZvciBwcm9wZXIgdGV4dCB2aXNpYmlsaXR5LCBkaXNhYmxlIGl0cyBkYXJrIHRoZW1lIGluIFNldHRpbmdzID4gQXBwZWFyYW5jZS48YnI+PGJyPlRoZSB0aGVtZSBoYXMgZGlzYWJsZWQgaXRzZWxmLiBBZnRlciBkaXNhYmxpbmcgdGhlIHNpZGViYXIncyBkYXJrIHRoZW1lLCB5b3UgY2FuIHJlYWN0aXZhdGUgdGhlIHRoZW1lIGJ5IHByZXNzaW5nIDxiPkNUUkwgKyBEPC9iPi4gPHU+Tm8gbmVlZCB0byByZWZyZXNoPC91Pi4iLHRpbWVvdXQ6MTVlMyxjb250YWluc0hUTUw6ITB9KSxUKHApKX0pKSx3aW5kb3cub25rZXlkb3duPWU9PntlLmN0cmxLZXkmJihlLnNoaWZ0S2V5JiYiS2V5WCI9PT1lLmNvZGUmJihlLnByZXZlbnREZWZhdWx0KCksaCgpKSwiS2V5RCI9PT1lLmNvZGUmJihlLnByZXZlbnREZWZhdWx0KCksVChwKSkpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigiY29udGV4dG1lbnUiLExlLHtjYXB0dXJlOiEwfSl9KCl9KSgpOw==",
            "base64"
          ).toString("utf8")
        );
      });
      