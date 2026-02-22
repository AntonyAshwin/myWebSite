import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const posts = [
  {
    slug: "death-stranding-review",
    title: "Death Stranding review",
    content: (
      <>
      <img
  src="https://assetsio.gnwcdn.com/death-stranding-pc-photo-mode.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  alt="Death Stranding"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>   One of those games that i woudn't fitgirl repack. stars Norman Reedus as Sam Porter, a deliver guy tasked to reconnect isolated cities.
        vrushank says this is a walking simulator. to me, its fucking unique. I havent played anything like this before.

        The story is highly philosophical, very cryptic, and original. The apocalyptic futuristic world is haunted by ghost like thing called BTs and timefall - rain which ages stuff when the rain drops 
        get in contact with the stuff. its got some really deep story plots (david lynch stuff).

        Gameplay mechanics - 85% of the game is delivering stuff from one point to another. it sounds boring - its not. there are beautiful biomes, weight balancing, climbing mountains,
        crossing rivers, avoiding these BTs, and managing resource. also its got this async multiplayer like online players can leave their resouces for you. there is combat and stealth,
        but i dont think Kojima's focus was on them - probably added cuz of metalgear.

        Graphics - honestly, not that great, i was on an AMD Ryzen 5, RX 570 4GB, 16GB RAM. I could in 1920x1080 with all high, but the graphics still looked shit. maybe i have the Anisotropic low.
        and sharpness high. the render distance was amazing, though. Weather effects and physics are amazing - well polished. especially in the snow and rocky terrain. Characters are photo realistic. 

        Music - mostly by Low Roar - very melancholic. environment sound is amazing - especially the rain, thunder, snow storms and the BT detector sounds. Voice acting are by the actors themselves. + point

        Bugs and shit - didnt notice much, there are some weird jigs here and there when riding a motorcycle across rough terrain, also see them rarely when on foot - nothing major though. game is well
        optimized. 
        
        Story - Huge story with very deep references and tons of terminologies, miss one and you're gonna have to goolge it - else you'd miss the next thing and end up like watching a david lynch movie. I think its 
        got a 45 hours or something out of which lot of it is cinematics - and they are kinda the core element of this game. guys who loves movies will definetly love this game. if you are someone
        who likes to skip cinematics and jump to gameplay - maybe not for you, go play rocket league or some shit.

        Grind - I hate grinds, i just dont have the time for it, there is a bit of grind in the game for better tools and gears but honestly, you can beat the game without that too. optional quests 
        are mostly just deliveries for more resources. you can skip them - i dont think you'll miss much (maybe an easter egg or 2)

        Verdict - a 9/10 for me, must play for guys who love narrative-heavy.a very polarized experience - maybe not for everyone but yeah if it clicks you, its unforgettable. requires a lot of patience with story telling and gameplay
        that is kinda medeative and sometimes very cryptic.

      </>
    )
  },

  {
    slug: "19-06-2025",
    title: "19-06-2025",
    content: (
      <>
      <img
  src="https://preview.redd.it/bengalurus-evening-sky-v0-s99djtrcr9ca1.jpg?width=640&crop=smart&auto=webp&s=c12fd2146056213e5e44d38d9125db555867a1d9"
  alt="Death Stranding"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>  I was dropping my brother at the airport, and we were talking about a bunch of
 things. Out of everything, we discussed Steve Winwood's "Can't Find My Way Home" - 
 not the original by Blind Faith, but a live version with Eric Clapton. I loved the 
 intro and the two other solos he played in it.

After dropping him off, I was driving back home. 
The sky was orange just as I got past the toll plaza, 
and I had this song on loop. I could feel the breeze outside, but I had my AC on. 
It was beautiful, there was nothing to worry about, everything felt right.
it just felt so fucking good.</>
    )
  },

   {
    slug: "Thinking, Fast and Slow review",
    title: "Thinking, Fast and Slow review",
    isNew: true,
    content: (
      <>
      <img
  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUTEhMVFRUVGRYVFxcYFyEaHRwcHRsaGxgXFx0YHighHxolGxcfITEhJSkrLi4uGCIzODMsNyguLisBCgoKDQ0OFQ8PFTUeHR0rLTA3NzcrNzc3Ny4tNys3LS03Kzc1MDc3KzcrKys3LS0rKzUtNzc2MC0rLTErLS0rNP/AABEIARYAtQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYCBAUDB//EAEMQAAIBAgMEBgkCBAMIAwEAAAECAwARBBIhBQYTMSIyQVFhcRQVQ1KDkbHC0SOhQoGSwQczYiRTdIKis+HwNXJzNP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAJxEBAAEDAwMCBwAAAAAAAAAAAAECAxEEElEhMaETIkFCYXGRsfD/2gAMAwEAAhEDEQA/APrcMS5V6I5DsHdWfCX3R8hSHqr5D6VkWA7R2fvoP3rl0x4S+6PkKcJfdHyFQ+IRSQWUEC5BIFhrqfDot/Se6pWVSuYMMtr5r6W770DhL7o+Qpwl90fIVnUBgeXZpQY8JfdHyFOEvuj5Cs6xdwvMgXIAubak2A8yaCOEvuj5CnCX3R8hWTMACSbAakn6moikDAFSCDyI18KCOEvuj5CnCX3R8hRpVC5iwC2vmvpbvvytWdBhwl90fIU4S+6PkKyDDXXlz8O3X+VTQYcJfdHyFOEvuj5Cs6UGHCX3R8hThL7o+QrOlBhwl90fIU4S+6PkKzpQYcJfdHyFOEvuj5Cs6UFR37jX9HQe07P/AKVNZb+ex+J9lRRFph6q+Q+lc7bWBSUZSyoWGpuAxKXMdrg9V2zeBsa6MPVXyH0rwx+ASawa+gYaW5MLHmOWnLke29FaG1NkyThumql4xG1swF8kynlzW8wNj7leWM2e1zmxADMZcmaQiwYMq5RfmvEUX1vYcia2zsOL/Vqbk3Gut9dLHmRqL2JrNdkRhct2y2YEaahgoYHTtyDlY6nvojR9WTFny4gg5mJGdmtmMjBSCbDovGOywjuOdbcGCyuP1DbJkdcxuWI6xOhzZf4jrYcu0ek+ykkN3Zm1DEHLYkLluRl7h+LV5jYsYbMpYNoQ3RJBCFAekp1sSde0k0HimyZwtjiGY2tfUWOXrAX1IcsQDpYgHqisZNisQLyEk8PMTI56sqyDKb6XAy6cq3TstM+e7Xux5j+LnqBm/fw5AAeXqSPMWzPq/EsSCLjUc15A/wDm9Br4nZkk0QUTXDQhCbtYko6ltDqGzg66jJ46e+Nw9pFYztGoClkLGxCXLkknTotqfAHspFsKJbdYgZbA2toQfd7xy/nz1r1OyI+nq36iup5cntmtp4cz+9BzpdkzNGf17qUA1ZiNEKlrg8r2a2t9a9n2XM2vGa2h0dxc3JzaHtBAy8hl05mvebYcTG/SFzc2I7y3aO8/9K91YjYEXe/gc2o/bx7e+g3MFBw0AY3Y2Ba9yxAsCSdScoHPurZrljYMQIIzgi45jx5gi3aa38NAI1Ci9hc6+JJP1or1pSlApSlApSlApSlBVN/PY/E+yoqd/PY/E+yooi0w9VfIfSs6wh6q+Q+lczaG2GieRRh5JFijErOGQDXMcozsCWAS/LtFFdalVvC7zyTRQyRYSTLiFLRu7oFHQZ1EmRmZQQpF8p1Ird3Q2w2OwcOJZAhlUtlBuB0iALnwFEdelLVxd5d4RgREWhkkE0iQrkK6O/VBzsNDbnRXapRb91vCtaXHxpLHCzWllDsiWNyEtmOgsALjn30GzSlqWoFKWpagUrVj2hE0zwK15Y1R3Sx0D3yXNra5TpevPYuKmmiV54Dh5CWvEXDkAEgHMumosf50G9SlqWoFK0duYt4MPLLGiu0aNIFZioOUFiLgHWw7qx3f2gcVhYJyoUzRRylRqBmUNYX7r0HQpSlApSlBVN/PY/E+yoqd/PY/E+yooi0w9VfIfStPb8qphZ2YgARS3JNh1D31uQ9VfIfSuVtzbceHeKKSKRzO2SPKqkF9TlOZhY2F7nTxorQ/w/xCeqcK2ZbLAoY30FhqD3WqhbvJDFhNiYhJSsj4hYnPGaxQmQOhUtlA0GgA5+NfTdj7WgxDTQohSSEqJonQAjMLqTlJVgQOYJ5V0ThI+XDT+kfjwoj5hsaX0ksZsdDh8YmLOYODxhaWyQpeUAxMgChQtjfkTrVi/wATsQiJgszKv+3YU6m2gLXPkKtGMmgiZHlMaM7LEjNYMzN1UU8yT3DuNbEkCt1lVvMA/Wg+e4/CYefaWPjlkYoMLFLl9IdVVunmYAOALWU25a3trXH2HLh3k2PLinjPEwk4d5WFmdOGFDMx6wHfX1f0WP3E8eiPxVPxO9ZjgxspwUd8BLlKCUa9FWMitw9D0hpa/wBKCv4eX0l8UJsdDhcUmKYIZFPFRVdeCsN5VHDZbDKF6WY3uTXU2HsyLFbQ2irzSFYZ8O8arMwykIHY9bVc1xbkLsBa9XuFFcJIUXMVBBsCRcXsDa9Zph0BuEUHvCgedB8b2isQ2dtDELNJxcPjysL+kOco4sQAAL2PRLakHQeFdHf7akLenmN7TwrhwGeezqRlcNhI1FwpVrs+YA25Wr6j6JHy4af0j8eNScNH7iajL1Ry93ly8KChbHOCba2KLNDaWHCSREsBnLcTO8ZvqSSNRXE3VxfE9XxTSlsK0mPDZ3LK8queCkrE9LoXIVjr3G1fWWhUm5VSbWuQL27vLwrE4WMqVKJlPNcosfMWsaD5Lt2TLHjuHKy4WPGYRcOVlKqGJUYmOMhtYxfVeQN7WtW/tXE4fAYraKCSbgnBwyMkc7F87SFCyNIxKtYrduwG9fTDhksFyLYchlFh5Dsp6LH7id3VHda3Lu0oPmOC2jFHLtKISQIjYFXVI5s8ZYJKrsjEKGbkGYAa89auu4Tg7NwViD/s8I07wigjzBrs+jJ7i8gOqOQ1A5cgeys44wosoAHcBb6UGVKUopSlKCqb+ex+J9lRU7+ex+J9lRRFph6q+Q+lVHf/APz9mANlJxgsdDb9N9bHTtHzq3Q9VfIfStbG7Kw85BmghlIFgZI1cgdwLA6UHzLbG1JMG+0URgXMuD4+NHRYJIQpR8twhRNAUAsGva+tdzGYPEBZRh8ZD+r6Pw4RPIwLB+kokYl0EqDL0e0X7SaukGz4UQxJFGsZvdFRQpvzuoFta14dg4RIzEuFw6xsQzIIUCkjkSoWxI76D5ttGWKYYVpEmhddqRwzRyYhnWNuEcyxOGtl0BDDUFmAsK6+38S0MzuS8+DDYaDNDiWEmGfoWDLmtIHLqSbliGsdKu0myMO0XBaCExDURGNSl+d8hGW9/CnqjDZxJwIeItgr8NcwsLLZrXFhoO6goOBnxGM9Jf0uODERYp1GeVxwljeyR8EEIUZNLm981+YFvLa7D0XeH/8AU/8AajH1r6HLsjDNKJ2w8LTLa0pjUuLcrORmHzrz9Q4TUei4fpWLfopqRqCejrqf3oKQ2JlxOLxOHadYuFBhxhw0zxWV4gzTpwyA7B9Lm9stu039PQZcRj1w0mNmKvs9JHeGVlDSZ8nFiANlBsGsND5Eg3DG7JwRCCXD4ciPSMNEhy+EYI08hXpDgcO0nFGHQScxIYlD8svWtmGmnlQbsMeVVW5awAudSbC1ye81nSlFKUpQKUpQKUpQKUpQKUpQVTfz2PxPsqKnfz2PxPsqKItMPVXyH0rOsIeqvkPpWdFKUpQKUrCSTL49w76CZJAouTYf+/vXh03/ANC/9R/sv18qzSLXM2p7O4eX5r2oPKGBU5DXtPMnzJ1NetKUClKUClKUClKUClKUClKUClKUFU389j8T7Kip389j8T7KiiLTD1V8h9KzrCHqr5D6VnRSlKUCvGEXOc9vLwH5POpxXVI77L8yB/evWgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgqm/nsfifZUVO/nsfifZUURaYeqvkPpWdYQ9VfIfSs6KUpSgwlFx+/y1/tWYNK11kCNkOl+p487qPEd3dQbFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoKpv57H4n2VFTv57H4n2VFEWmHqr5D6VnWEPVXyH0rOilKUoFYSxBwQRcH/248azpQaoZo9G6Sj+K/S/mLfvXtDOri6kG3Pw8x2V6V4zYVGNyNexhoR5Ea0HtStfJIvJgw7m0P9Q/uKwOOC/5isniRdf6lvb+dqDbpWEUquLqQw7wb/Ss6BSlKBSlKBSlKBSlKBSlKCqb+ex+J9lRU7+ex+J9lRRFph6q+Q+lZ1hD1V8h9K5O0sfixOIsPBHIvDEjPJK0YBLFQoyxtc6Xors0qmbH3px2KkxMUeEw4bCuI3zYpwCTm1W0B06PbatNt5cd6ds6N8kUeLM4khyXZDECCOIesCbEEKv86Iv9Khr2059l65W7EmNaEnHpEk2drCIkrk0yk3J1vft5AcuVFdalLVThtjFLtoYNpEaBsO06qIwpHSKhWa5JsVOote/LSguNKwnzBWyAFrHKDoCbaA+F6527T4xoFOOSNJ7tmWI3W1+jzJ1t4mg3JMGhN8tj3glT81tUcKReq+bwcDTyK2PzvWzalqDW9IYdeNvNekPl1v2r0ixCtyIv3cj8jrXqRWEkStzANBnStY4dhfK5HgekP37PK1OK69Zc3in4P5oNmleUWIVuR17iLH5HWvWgUpSgUpSgqm/nsfifZUVO/nsfifZUURaYeqvkPpWdYQ9VfIfSpdbggEi4IuOY8Re4v50VRf8ADs/7btf/AIlfrLXlv7hxLtXZKFmUN6WCUYqwGRL5WGo5WuNdeyrFsLdSHByyzRSTFpzmlDuGDtdjmIy6EFydLc+6s9qbsRYnExYp5JhJBfhZWUKlwA1gVN81tb3oisbtbPEG1cbglkmOHbDpJlaZyVLFQSr5swPSPSBvqNdBXE2aJG2HjnM8/EhxE7JJxnD9ARqAzBrlSL6HTW/O1X9d1kXFSYtZ8Qs0ilGIZbZexQpQgBbC3bprfW+nBuHh0w8uFWbECGZs8i51NzpfUpcXyi9j/D53CnbdwRwsGycZFPiONLLg43LTMylXjzFcpOUDo2sByJvfnW/vdjjhttGVYWnKbNc8NbXI4kl73PVA1Nrm3IGrPjtyoJocPA8s5TClTFZ1BBUWQk5Lkqug8OdzrXuN1Y/S1xpmnadVEdyy2Ka3QqEAsSST268xQc7cvZWGlwQljlklOIVi8okdSpbrJGM94gh6IANxl1J51ScPNK+7TzmefixyOwcTOGP6oQhyGuwynka+hbO3OhwrzPhpp4VmuWiRl4YJ/iRWQ5T5eA5ACtePcDDLhWwQlxHo7MGKZ153v1smaxIBtfs87hW9u7PODm2ViIpsRnmmiilzyswZWVbjKTlAtcWAA15aV74FosViNqespCpgdkjQymMRwANkljAYC7Cxz6m9vKrNtDc+LEDDrJNiD6NlMRDqCGU9Fz0NWAAGulh4m9Qw+zcbj8TicVhZcJLGJeFG+KhzsvDGoiAU5VDE66Zjrag7n+EeHddnRyzKyyy3LF2YllBIjazk2uvda/Ptq7V8wxWHxe2MFicNiUBxGGxIiR4GyxlgvXkzHVUz3IGvKwBr6XBHlVVuTlAW55mwtc0HpSlKKwkjDCxAIrDhEdVj5NqPz+9e1KDz4tusLePZ/wC+degNK8zH7un0/mKD0pWKtWVBVN/PY/E+yoqd/PY/E+yooi0w9VfIfSuJvPvRHs/hmWKZllYRqyZCM5uQhzOCCQpN7W8a7cPVXyH0qif4yX9FwtrX9NgtfQXyS2uewUFjh3gbjxwS4TEQmXMEdzEVJVSxF4pXsbA6eHhXbqtzYvaPEZXjw0CcCdllEjSqsoyZDIXjTKoBY2sbgHUW1q+E25NHitmouNkxInLpiGKfouctw0DGNRYH3SeQvzoPpla8mOiWRYTIolcFlS/SIHNgOdh318+2/vG8eKxMGLxM+CzWGClVRwbZeu5yksc/WubADs51OP2cW27AvpEwLYNmzqVuOk4yoShGTt1BOvOg+kUrm7fMiYWXhTJC6p0ZpbZUt/G99OXhz7KpuyNtSrtHCQJipp4poHMhlSymRVLcSEtGt1Nv4brrQfRKV842P6wxUu0IDtGRfRpAiOIo8x0YqDZQAOV7AE9/ZWpsnfLFzYDZ6hwMTjJ3gMxUHKiPZpAtspkykAXFiaC07T3kng2lhsGYo+Fic5WTOS1kQlrrlABzWHM6GvDbe7uzsGs2KkabDoxzyiGeWNXZjbqRsLsxNrDvrkbYwDQ7Z2VmnmmzDE6ylSRaPXLkVed9R4C1qtW+mwV2hhHw5k4ZYqyP3ODdbjtBOlhrrpQaWA2ymF4EC7PxGHilcRxkiLKGa5u4SVmUnUksLnzqd1t5J8Vi8Zhpoo4zheEOg5fNnzm92C6WUdnbXI2dvVi8JNDhNrQLeRlSLFR6ozXsuYW0a5AuLHXqga1zcPtc4LGbfxAUMYxhSoPIsUYLfwuReg+pUr59tP02HZYx4xkpxCxx4hlIXhMGylouHl0UK1gQc2nOvEbxSpjcDNLPImDxuGM/DOXKkgTiFS2W+XKRYX59tB9HpXy7Bby40rjsNiJGjxRMMuFtluoxBVY4hpqqO6A3B5trpX0rA4cxoqNI8hA1d7XY9pOUAfyAoPelKUVBFBU1AoKrv57H4n2VFTv57H4n2VFEWmHqr5D6VXN9t1n2ksSekCFInEotFnYuAwBuXAygMdLc+3sqxw9VfIfSs6K5W2dkHGYOTDTSDNKhRpEXKL87hSzaacsxvrrVdl3HxEnojSbQYyYQ9BlgUALly2VSSM9gLs2Yacu+70oiqbX3VnxKTQPi1bDzyGQhoc0qAkHJE5kyqBbQ5DbWstqbpM+Jw+Jw2I4D4eLgWMYkDR62GrDXU9/Z3VaaUHD3r3dG0MG+EeVlzBP1LAm6kEFgLA3I1Atz0tXKfc/EvicNipcezSwB1YiFVBVgBlQXIUc7k5ib6WsLXGlBVNjbrYjDSYuUYqNmxfSb/ZyAr62ZRxr5QCRlJ7tdDflRf4alcJFhhiyHw0vHw8yxWZGJzMHGchgWsRbLbL28q+gUoKZPubiZp8NiZ9oMZcPnsUgRR0rA5QbgXAN82a+lstte5vLsY4uOMJKYXilSeNwoYZkvYMpIuuvK4rr0oKxNuzNipYJMdiElXDvxY4ooTEhcdV5C7uxtzABA861cLuQeNjJJ51lTHqFmjWEpbKCEMbcRspF+0HlVxpQU19z8RJhlwU2MDYRcikLDlmZEIKxtJxCttACQgJtXR3l3ShxyYaNugmHljkAAuCiixi15KRb5VYaUHA2jutHNj8PjibNArrlt1r3yEm+mXMx5G9xytXfpSilKVDG3OgkmsU7++o5+X1/8VnQVTfz2PxPsqKnfz2PxPsqKItMPVXyH0rOsIeqvkPpWdFKUryxKFkYDQkED5UFf2xvlDh8/6ckhTNottSulhc9prQ2Tv/6TnCYHEkoQrWy8+0akcqqO3N09oPmURFlIK3VhyJ51obF3GxaZjLBibk36Eqr53ve5rKvftnHdvV6Waccdfuvmyf8AENMRiOAMLOhBcFmK2GW/Oxvc2qx+t191v2/NfIdlbmY+HFGZcPLa72DOvJr6G51OtWn1ftKw/Rb+tb/WvNqJ1W6PS7Y8lEWse6VzTbaH+Fu/s/NSdsoP4W/b81Szs/aN78J/61/sakYHadj+iddCC6EfXWsInX/Tw7xY5XX1svut+35qPXCe637fmqYuzto/7lh/zr+ag4Haf+6f+tfzV3a7iPBtscrou2VIuFb9vzUDbKH+Fu3u7ND21SvVu0r3ELjt/wA1fzUjZu0hyiYdujp+au7Xcfo22OVwn3gjS2ZJBftAB/vSPeXDHm5XzU/2FVD1JtGTrR+WaRR9L1sw7o4s9Z4V/mW/sK9NudRj3YykxY5XCLa2HblNH/NgPrW0kqt1WB8jf6VUE3FJ6+Je/wDoXKP3Jrt7G3dhwuqjM3vsAWHkbXr0U7viwq2fK6pv5fvULGBrzPef7d38qzpXTkpSlBVN/PY/E+yoqd/PY/E+yooi0w9VfIfSs6wh6q+Q+lc7a+34MK8aTGQNMcsYWJ3zN7oKKRm8KK6lK5OF3jw0kogzMkxBKxyxPEzAcynFVc9v9N7V1qBSlaMG01eeTDhJQ0ao5coRGc3II/Ikdo/FBvUrR25tL0WCScxvIIlLsqZc2UasRnYDQa87916812zGMKuLcMsZjWY2UuVUqG1CAk2B1t3UHSpXDfezCDDx4ktJwZWCRsIJCWJ6tlCZtew217K7MMgZQwBAIvZgVP8AMNqD4GgzpXI9fL6b6EYpAxiM6yHLkZQVU2sxa92tqByrr0ClKUClKUClKUClKUClKUFU389j8T7Kip389j8T7KiiLTD1V8h9Kqm/P/8ARsv/AIxf+29WuHqr5D6VytuYLByMjYpAxQO6Fs1lCC7MCuikDt0NBXv8SkzzbMjj/wA4YyOUW5rEgJmc9yAWv5VqbO2xOcVs/LiJ5YsW2KDSOqIkqhGeNoowSyZLAXIW/jerfs3DYWN2MMYzsFDPkYlgVzKGkYG6215217zWvDufs9MuXCwjI2dOjybXVe61yQOQOosaCjz7SxqYGbF+mzM+HxrQBSseV0E6xWcBBe4bssPCujvdvFisFPtApKzLHhsPJErBcsbSzcJn0W5CjpdK/wAqtZ3WwRjaLgIY3fiMlzlZ/fIvq3j4eFRiNk4NJMzQh5JlMTXu5ZLWKvmJugHYb0Fe2ph8auHxTSOGwzYKbRpuKxkykiRCI1AUqTcA25WArrYf/wCHX/gR/wBis8Fu7s5c8MUEdnUhgtyCoazR3vyzDVOWmordxWEwkUCYd1VYHIhVCWym97Rk9inkATY8vCgoe6mP9G9XNjcvo8mGhTByckimKdNZATbiONBJ2C4Frtfq78bVkjOMME8+fDYZX4cYRUhc5mWSVnYF8wW2QBrActasE2zsD6JJC0KnDR5y0ZRiBk1bIra6W0y6d1eeN3Z2eqNJJh0YLEysSCx4YBuNSSbKSB2jsoOFiYXxO1ML+s8LPs92Z48ubWSMkDOrAC57r6VzIds4xsDs+T0qQSSY70SRgqdNDM6AtdT0gEHLQ3NwauMOysBDMgSJY5VQRplDrlRg1kVh0QDkY2vqQTzrNN2MDlEYgULG+dV6QVX5501tm16y9t+29BTNqbexeCbHwjEPJklwMccsuW8QxA6bEhMth2EqQDbQ8jv7zttHC4XGTCcxokSSQ2kEzhw1nBZ4h+mysD3gjQgG1Wxt3cIzSsYEYzjLNmu3EA5BwTY2tp3dlq8It0cCsbRLhoxG+XMuvSC3yq2tyoubKdB3UFe4eKO0RhfT8Rw5sGcQTaPMriQJ0Dw7BSG7r6c61N39tT4nDYISYiZ5mGLLxwqivKscjRLI8jMoQJoTY9I9h1q6jYGG4gl4Q4gThB8zZglrZAb3y68u/XnrWsm6OAAQDCx2jLFBY2XN1rAm1iRcjkTQU/Z+2MZPh9jucVIjYl3imKqnSsshD9JD0ugPDvFWLcrETcXHQSzPMMPOEjd7ZsrRq+UlQAbE91dCDdTAx5MmHReGxkTLcWc83Fj1uy/OwA5CtzA7Jggd3ijCvKbyEE9I97XOp8aDdrU2jtKLDrnmcIOQ7ST3ADU1t18u38mOIxpw51uYsMikXF5ArFrfEufBBWV2uaKcxGZbWbcV1YqnERGV/wBlbdw+KJEMgYjWxBBt3gEajyrpV8l2ivq7aAjVicghnViLXU9CRSbm56Juf9dfWjS3XVO6Ku8SXaKadtVPaY/oVTfz2PxPsqKnfz2PxPsqK1YrTD1V8h9K8MdghKYySRw3D6fxdFhlPgc1/wCQr3h6q+Q+lZ0Vw5N3FMPBD6XmsSoNleNolQWI0RGAHfkF++j7uqTcMq2YsuWOxW8olIU5tO0f8xruUojk7O2GsTI5yMUUqDkINzbpAszWNhbTvPKscDsIROj5g2RQvU52XKGJv/mHmzdthytXYpRXDfd0H+MCzOykR2Zc0vFNjm0P8N7cq94djARpGSjKGJcZDZwUZCCGc2uG8eXKurSiOBJu0GRkMztmBGZgC4GaQrZrjskyknVguupJqZd2gS5zgZ1dbZDlUsHGaNQ4C9c3Bve3ZXepQcvHbGExlLEHiRCEXS+WwkBca87Skf3515S7BUnomNVzrJl4QtdVAH8XLMobzAvcc+zSg0dkbOGHQrmzXN81jc2AALXY3aw1ItfuFb1KUUpSlApSlAr5zvphzhccmM4ZdS0cgA5lkAR0HYGyKpF/HuJr6NWE0SuCrqGU8wwBB8wazuUbo6S0t17J6xmJ6fl8yxc/rXHRZYWTIEViTfoByzG40tlNvNq+oGvDC4OOIERxogPMIoW/nYV71LdE05mqczK3a4qxFMYiFU389j8T7Kip389j8T7KitWLtw7UTKNG5DsHd51n60Tub5D81NKKj1onc3yH5p60Tub5D81NKCPWidzfIfmnrRO5vkPzU0oI9aJ3N8h+aetE7m+Q/NTSgj1onc3yH5p60Tub5D81NKCPWidzfIfmnrRO5vkPzU0oI9aJ3N8h+aetE7m+Q/NTSiI9aJ3N8h+aetE7m+Q/NTSgj1onc3yH5p60Tub5D81NKCPWidzfIfmnrRO5vkPzU0oI9aJ3N8h+aetE7m+Q/NTSgq2/G0Ebg2De07B/o8aUpVH/2Q=="
  alt="Thinking, Fast and Slow review"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>

I found this book from a Reddit post where someone was talking about AI using System 1 and System 2, and it is derived from this book.
Thinking fast and Slow is an amazing book, 
Daniel Kahneman argues that our brains are very prone to error and prejudice. His thought is 
that humans have 2 systems. One which thinks fast and gives a quick response, and another
which takes its time to give a correct response - he argues that both rely on each other you 
cannot live without each other. What I loved about this book was that he doesn’t simply write
 stuff, he makes the reader enter small problems and experiments so we catch our own thinking 
 mistakes. Kinda thrilling sometimes. I loved his “farmer” vs “librarian” example which shows 
 how we ignore base rates and rely on stereotypes. I never knew Bernoulli had something to do 
 with statistics till I read this book. I used to know him only for the fluid mechanics and 
 that god awful differential equations. The section about suicide bombings stood out. Author 
 admitted that he avoided stopping near bus despite knowing the statistical risk was low. he 
 also explains how two bombers in one city versus one in another doesn’t proportionally change 
 public fear that is the fear in one city is half of the other. Shows how emotions override 
 statistics. Honestly, that made the book very persuasive -but it comes later after half 
 the book is over :( Something I feel Indian readers can’t relate to maybe because its mostly in 
in US and Israel, and I felt somethings were just repetitive.  Bottom line, what I learnt was that our brains are lazy and 
it prefers easy answers which it tries to convince itself why it is correct. That realisation alone made me read this entire book. Loved it - 8/10</>
    )
  },


    {
    slug: "Romanov review",
    title: "Romanov review",
    content: (
      <>
      <img
  src="https://static.livcheers.com/static/content/images/liquor/LCIN02549.webp"alt="GTA VC"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>
I could take 10 shots of this back then, not anymore though and i'm proud of that. a half  was 398. It came in prime, orange and green apple flavours. 
you CANT make cocktails with them. they'll taste shit. i've tried with everything, sprite, fanta, pepsi, thumbsup, fuck it we even poured
in rasam and some other crap but yeah. it never gets better. shot with a lemon, one shot every 10 min and i guess you can make upto 10 shots.
this is probably what half the pubs in bangalore mix  and serve as "Cocktail for 99". Easily accisible i dont know a single store who doesnt have Romonav.
Pretty cheap too, i never bought a full but i'm sure its cheap. the kick - maybe not so good and i'm not sure what it is but the hangover is pretty bad with this.
Overall a 4/10. 
 </>
    )
  },


  {
    slug: "gta-vice-city-review",
    title: "GTA: Vice City review",
    content: (
      <>
      <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpnDqnfoJBc6O7KE0r4FNfGa8HaXW8X9_aA&s"
  alt="GTA VC"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>
  it was released in 2003 by Rockstar Games. probably a banger at that time. 
    an alltime favourite of many, an alltime nostalgia for a lot. I originally played this in 2009 but I never got to beat it, I was maybe 8 or something. I only started playing it now after watching a lot of scorsese movies and finally scarface.
    main plot is: Tommy Vercetti comes to VC for a drug deal, but shit goes south and he needs to sort this shit. it's an open world game, probably the most popular one at that time, set in vice city, giving a Miami inspired 80s vibe. the last game was very dark and gritty, so I guess rockstar decided to make this a full neon, vibrant,
    super high contrast world. amazing open world for its time, missions were not boring (god helped in the RC copter mission), awesome vehicles, cool animations. not much freedom in choosing the style to complete a mission,
    but that's fine after all, it was 2003. a lot of improvements over GTA 3, amazing protagonist, I didn't know it was Ray Liotta. in fact, I didn't know who Ray Liotta was till I started watching scorsese's stuff. graphics are good for its time, world is small but still good.
    not much to do once the game is complete, my favourite was the music - especially Flash FM, omg it's the best. overall a 10/10.
  </>
    )
  },

  {
    slug: "10-09-2025",
    title: "10-09-2025",
    content: (
      <>
I decided to leave office a bit late today, 
typing this while waiting for my deployment to finish. It's odd,
 I fucking hated staying late in my old company. Back then, i'd pray that it'd 7 so i can
 can punch out and leave. Now I don't even look 
 at the time, but I know it's pretty late and I should probably head home.
      </>
    )
  },

  {
    slug: "21-09-2025",
    title: "21-09-2025",
    content: (
      <>
is this something new ? commiting in a static file directly on the repo and calling it a blog post. no db, no server code, no session. sounds cool

      </>
    )
  },

  {
    slug: "22-09-2025",
    title: "22-09-2025",
    content: (
      <>
    22/09

Colosseum -
was excited to see this, I played a lot of ACBH, when I saw from a bit far it looked smaller, when I went closer it looked bigger, also could see the viewpoint that was in ACBH - but the place was not very crowded and also it was a bit rainy. there was tram service too and a UG metro. the place is not very modern but a classic Europe town. also liked the arch of constantine - exactly how it was in acbh
i walked across old rome while chatgpting acbh references - bunch of old buildings.
i went back to the motel, 
dinner -  apple, chocolate bar.
   </>
    )
  },
  
  {
    slug: "23-09-2025",
    title: "23-09-2025",
    content: (
      <>
      i'm heading to s7f8
      on the way i got breakfast,
 croissant, loaf of bread, jam

, cheese, honey, scrambled eggs, pineapple juice. 
 on the way before reaching, i saw aqueduct - exactly how it was in acbh, i love the side hustle in acbh to complete the building of aqueduct - the original is well in pieces

reached, nothing special there was a fy886 for the ministry i think ministry of finance guys were there and lot of army dudes 2 starred - green coats

i overheard the guide talk about INRI board and the nail kept omly 800m across
not sure if i'm believing it cuz something so important wouldn't be kept so openly, i feel probably the original is hidden somewhere.
i reached.
also there was a photo of the shroud that was kept on Jesus before putting him in the tomb, 

i saw tiber island (acbh assassin hq) and casttelo angelo 
for lunch,  i ordered a mango juice for €2
vatican museum - italian paintings and sculptures
sistine Chappel - beautiful but the security kept asking me to move
St peter's basilica i saw where ezio ran with the eden, also saw the entrance of the epic rodrigo ezio fight.
for dinner
i  took a 100 bill on hopes that the restaurant guy will have change. I asked what he can recommend and he said carbonara, pork, cheese what not not sure. he asked if i should get something to drink, i told i'll wait

after this meal, he recommended an italian beer

   </>
    )
  },

  {
    slug: "atomic-habits-review",
    title: "Atomic Habits review",
    content: (
      <>
      <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzCtjsiVYA0nHqf1yu50JSdlhstDvurpecQ&s"
  alt="GTA VC"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>
I got to know about this book from social media, way too many guys sharing this on their linkedin, jeez. Anyways, I wanted to see what's up.
I got an online copy. I started reading it on 12th Oct. I finished the book on 5th Nov in a shuttle while heading to the office. I liked it. There were a lot of things I could relate to. A very practical book, his four-step process of making or breaking a habit is something anyone can follow along; it is practical, and that's what I liked about it.
Things like habit stacking, identity-based habits, and progress tracking are something I was already following. I just didn't know that it was a thing. But yeah, certain things were something I never thought about, like 1% improvement every day, not relying on willpower to stop a habit, and using the environment around us to break the bad habit, creating friction.
Overall, a good read. I replaced a bad habit of listening to music and zoning out in the metro, bus, or on the treadmill with reading books. And most importantly, I got to know about Allen Carr's Easy Way to Stop Smoking book, which helped me a lot. Would recommend it if you want to cultivate good habits or break bad habits. It works.
   </>
    )
  },
];

// Export posts for use in BlogPost component
export { posts };

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="win95-section">
        <h2>Post not found</h2>
        <button onClick={() => navigate('/blog')}>Back to Blog ←</button>
      </section>
    );
  }

  return (
    <section className="win95-section">
      <h2>Blog / Thoughts</h2>
      <div className="blog-post">
        <button style={{ marginBottom: 12 }} onClick={() => navigate('/blog')}>Back ←</button>
        <h3>{post.title}</h3>
        {post.content}
      </div>
    </section>
  );
}

export default function Blog() {
  return (
    <section className="win95-section">
      <style>
        {`
          @keyframes flashNew {
            0%, 100% { color: #c00; transform: scale(1); }
            50% { color: #fc0; transform: scale(1.1); }
          }
          .new-badge {
            animation: flashNew 0.8s ease-in-out infinite;
            display: inline-block;
            font-weight: bold;
          }
        `}
      </style>
      <h2>Blog / Thoughts</h2>
      <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
        {posts.map((post, idx) => (
          <li key={idx} style={{ margin: '12px 0' }}>
            <Link 
              to={`/blog/${post.slug}`}
              style={{ color: '#007', textDecoration: 'none', cursor: 'pointer' }}
            >
              {post.title} {post.isNew && <span className="new-badge">★ new</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
